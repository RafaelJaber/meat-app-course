import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RestaurantModel} from './restaurant.model';
import {MEAT_API} from '../../app.api';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class RestaurantService {

  constructor(private http: Http) {
  }

  restaurants(): Observable<RestaurantModel[]> {
     return  this.http.get(`${MEAT_API}restaurants/`)
      .map(response => response.json());
  }
}
