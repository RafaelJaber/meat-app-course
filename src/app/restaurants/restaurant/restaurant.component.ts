import { Component, OnInit, Input } from '@angular/core';

import {RestaurantModel} from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: RestaurantModel;

  constructor() { }

  ngOnInit() {
  }

}
