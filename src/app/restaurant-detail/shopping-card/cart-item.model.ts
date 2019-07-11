import {MenuItemModel} from '../menu-item/menu-item.model';

export class CartItemModel {
  constructor(
    public menuItem: MenuItemModel,
    public quantity = 1
  ) {}

  value(): number {
    return this.menuItem.price * this.quantity;
  }
  name: string;
  id: number;
  imagePath: string;
  description: string;
  price: number;
}
