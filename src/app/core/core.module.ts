import {NgModule} from '@angular/core';

import {AuthService} from './auth.service';
import {OrderService} from '../order/order.service';
import {RestaurantService} from '../restaurants/restaurant/restaurant.service';
import {ShoppingCardService} from '../restaurant-detail/shopping-card/shopping-card.service';
import {NotificationService} from './notification.service';
import {LoggedinGuard} from '../security/loggedin.guard';
import {LeaveOrderGuard} from './leave-order.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';


@NgModule({
  providers: [
    AuthService,
    OrderService,
    RestaurantService,
    ShoppingCardService,
    NotificationService,
    LoggedinGuard,
    LeaveOrderGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class CoreModule {}
