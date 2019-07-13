import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../restaurants/restaurant/restaurant.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {ReviewModel} from './review.model';

import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  animations: [
    trigger('reviewsAnimate', [
      state('ready', style({
        opacity: 1
      })), transition('void => ready', [
        style({
          opacity: 0,
          transform: 'scale(0) translateY(-100%)'
        }), animate('250ms 0s ease-out')
      ])
    ])
  ]
})
export class ReviewsComponent implements OnInit {

  reviewsState = 'ready';

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
