import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RestaurantModel} from './restaurant.model';

import {MEAT_API} from '../../app.api';
import {ErrorHandler} from '../../app.error-handler';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ReviewModel} from '../../restaurant-detail/reviews/review.model';
import {MenuItemModel} from '../../restaurant-detail/menu-item/menu-item.model';


@Injectable()
export class RestaurantService {

  constructor(private http: Http) {
  }

  restaurants(): Observable<RestaurantModel[]> {
     return  this.http.get(`${MEAT_API}restaurants/`)
      .map(response => response.json())
       .catch(ErrorHandler.handleError);
  }

  restaurantById(slug: string): Observable<RestaurantModel> {
    return this.http.get(`${MEAT_API}restaurants/${slug}/`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurants(slug: string): Observable<ReviewModel[]> {
    return this.http.get(`${MEAT_API}reviews/?search=${slug}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  menuOfRestaurants(slug: string): Observable<MenuItemModel[]> {
    return this.http.get(`${MEAT_API}menu/?search=${slug}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }
}
