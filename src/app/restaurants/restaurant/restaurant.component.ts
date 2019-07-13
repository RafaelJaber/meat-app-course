import { Component, OnInit, Input } from '@angular/core';

import {RestaurantModel} from './restaurant.model';

import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  animations: [
    trigger('restaurantAppeared', [
      state('ready', style({
        opacity: 1
      })), transition('void => ready', [
        style({
          opacity: 0,
          transform: 'scale(0.3)'
        }), animate('250ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  restaurantState = 'ready';

  @Input() restaurant: RestaurantModel;

  constructor() { }

  ngOnInit() {
  }

}
