import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../restaurants/restaurant/restaurant.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MenuItemModel} from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItemModel[]>;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.menu = this.restaurantService
      .menuOfRestaurants(this.route.parent.snapshot.params['slug']);
  }

  addMenuItem(item: MenuItemModel) {
    console.log(item);
  }

}
