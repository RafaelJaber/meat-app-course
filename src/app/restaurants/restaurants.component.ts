import { Component, OnInit } from '@angular/core';
import {RestaurantModel} from './restaurant/restaurant.model';
import {RestaurantService} from './restaurant/restaurant.service';

import {trigger, state, style, animate, transition} from '@angular/animations';


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

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  toggleSearch(): void {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }
}
