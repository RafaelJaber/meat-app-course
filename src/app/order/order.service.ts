import {Injectable} from '@angular/core';
import {ShoppingCardService} from '../restaurant-detail/shopping-card/shopping-card.service';
import {CartItemModel} from '../restaurant-detail/shopping-card/cart-item.model';

@Injectable()
export class OrderService {

  constructor (
    private cartService: ShoppingCardService
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
}
