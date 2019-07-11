import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../restaurants/restaurant/restaurant.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {ReviewModel} from './review.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<ReviewModel[]>;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reviews = this.restaurantService
      .reviewsOfRestaurants(this.route.parent.snapshot.params['slug']);
  }

}
