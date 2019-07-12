import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {InputComponent} from './input/input.component';
import {RadioComponent} from './radio/radio.component';
import {RatingComponent} from './rating/rating.component';
import {ShoppingCardService} from '../restaurant-detail/shopping-card/shopping-card.service';
import {RestaurantService} from '../restaurants/restaurant/restaurant.service';
import {OrderService} from '../order/order.service';




@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ShoppingCardService,
        RestaurantService,
        OrderService
      ]
    };
  }
}
