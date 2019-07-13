import { Component, OnInit } from '@angular/core';
import {RestaurantModel} from './restaurant/restaurant.model';
import {RestaurantService} from './restaurant/restaurant.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import {trigger, state, style, animate, transition} from '@angular/animations';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import {Observable} from 'rxjs/Observable';
import {NotificationService} from '../core/notification.service';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *', animate('250ms 0s ease-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden';
  restaurants: RestaurantModel[];

  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(
    private restaurantService: RestaurantService,
    private fb: FormBuilder,
    private notifications: NotificationService
    ) { }

  ngOnInit() {

    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(searchTerm =>
        this.restaurantService
          .restaurants(searchTerm)
          .catch(error => {
            this.notifications.notify('Ocorreu um erro na sua conexão com a internet');
            return Observable.from([]);
          }))
      .subscribe(restaurants => this.restaurants = restaurants);

    this.restaurantService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  toggleSearch(): void {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }
}
