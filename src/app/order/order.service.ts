import {Injectable} from '@angular/core';
import {ShoppingCardService} from '../restaurant-detail/shopping-card/shopping-card.service';
import {CartItemModel} from '../restaurant-detail/shopping-card/cart-item.model';
import {OrderModel} from './order.model';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {MEAT_API} from '../app.api';
import {map} from 'rxjs/operator/map';

@Injectable()
export class OrderService {

  constructor (
    private cartService: ShoppingCardService,
    private http: Http
  ) {}

  cartItems(): CartItemModel[] {
    return this.cartService.items;
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  increaseQty(item: CartItemModel): void {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CartItemModel): void {
    this.cartService.decreaseQty(item);
  }

  removeItem(item: CartItemModel): void {
    this.cartService.removeItem(item);
  }

  checkOrder(order: OrderModel): Observable<number> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${MEAT_API}orders/`,
                                JSON.stringify(order),
                                new RequestOptions({headers: headers}))
    .map(response => response.json())
    .map(response => response.response);
  }

  clear(): void {
    this.cartService.clear();
  }
}
