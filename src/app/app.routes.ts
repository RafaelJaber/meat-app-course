import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './restaurant-detail/menu/menu.component';
import {ReviewsComponent} from './restaurant-detail/reviews/reviews.component';
import {OrderSumaryComponent} from './order-sumary/order-sumary.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurant', component: RestaurantsComponent},
  {path: 'restaurant/:slug', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]
  },
  {path: 'order', loadChildren: './order/order.module#OrderModule'},
  {path: 'order-summary', component: OrderSumaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
];
