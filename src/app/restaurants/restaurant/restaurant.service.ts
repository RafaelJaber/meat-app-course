import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

  constructor(private http: HttpClient) {
  }

  restaurants(search?: string): Observable<RestaurantModel[]> {
    let params: HttpParams = undefined
    if (search) {
      params = new HttpParams().append('search', search);
    }
     return  this.http.get<RestaurantModel[]>(`${MEAT_API}restaurants/`, {params: params})
  }

  restaurantById(slug: string): Observable<RestaurantModel> {
    return this.http.get<RestaurantModel>(`${MEAT_API}restaurants/${slug}/`)
  }

  reviewsOfRestaurants(slug: string): Observable<ReviewModel[]> {
    return this.http.get<ReviewModel[]>(`${MEAT_API}reviews/?search=${slug}`)
  }

  menuOfRestaurants(slug: string): Observable<MenuItemModel[]> {
    return this.http.get<MenuItemModel[]>(`${MEAT_API}menu/?search=${slug}`)
  }
}
