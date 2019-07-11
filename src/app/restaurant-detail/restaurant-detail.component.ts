import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {RestaurantService} from '../restaurants/restaurant/restaurant.service';
import {RestaurantModel} from '../restaurants/restaurant/restaurant.model';


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})

export class RestaurantDetailComponent implements OnInit {

  restaurant: RestaurantModel;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.route.snapshot.params['slug'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
