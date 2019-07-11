import { Component, OnInit } from '@angular/core';
import {ShoppingCardService} from './shopping-card.service';
import {CartItemModel} from './cart-item.model';
import {MenuItemModel} from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCardService) { }

  ngOnInit() {
  }

  items(): CartItemModel[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  clear(): void {
    this.shoppingCartService.clear();
  }

  removeItem(item: CartItemModel): void {
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: MenuItemModel): void {
    this.shoppingCartService.addItem(item);
  }
}
