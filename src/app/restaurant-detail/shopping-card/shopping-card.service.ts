import {CartItemModel} from './cart-item.model';
import {MenuItemModel} from '../menu-item/menu-item.model';
import {Injectable} from '@angular/core';
import {NotificationService} from '../../core/notification.service';

@Injectable()
export class ShoppingCardService {
  items: CartItemModel[] = [];

  constructor(
    private notificationService: NotificationService
  ) {}

  clear() {
    this.items = [];
  }

  addItem(item: MenuItemModel) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
      this.notificationService.notify(`Você adicionou o item: ${item.name}`);
    } else {
      this.items.push(new CartItemModel(item));
      this.notificationService.notify(`Você adicionou o item: ${item.name}`);
    }
  }

  removeItem(item: CartItemModel) {
    this.items.splice(this.items.indexOf(item), 1);
    this.notificationService.notify(`Você removeu o item: ${item.menuItem.name}`);
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }

  increaseQty(item: CartItemModel): void {
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item: CartItemModel): void {
    if (item.quantity > 1) {
      item.quantity = item.quantity - 1;
    } else {
      this.removeItem(item);
    }
  }
}
