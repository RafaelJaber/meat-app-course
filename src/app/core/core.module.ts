import {NgModule} from '@angular/core';

import {OrderService} from '../order/order.service';
import {RestaurantService} from '../restaurants/restaurant/restaurant.service';
import {ShoppingCardService} from '../restaurant-detail/shopping-card/shopping-card.service';
import {NotificationService} from './notification.service';


@NgModule({
  providers: [
    OrderService,
    RestaurantService,
    ShoppingCardService,
    NotificationService
  ]
})
export class CoreModule {}
