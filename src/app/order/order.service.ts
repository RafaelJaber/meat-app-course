import {Injectable} from '@angular/core';
import {ShoppingCardService} from '../restaurant-detail/shopping-card/shopping-card.service';
import {CartItemModel} from '../restaurant-detail/shopping-card/cart-item.model';
import {OrderModel} from './order.model';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {MEAT_API} from '../app.api';


@Injectable()
export class OrderService {

  constructor (
    private cartService: ShoppingCardService,
    private http: HttpClient,
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
    return this.http.post<any>(`${MEAT_API}orders/`, order)
      .map(response => response.response);
  }

  clear(): void {
    this.cartService.clear();
  }
}
