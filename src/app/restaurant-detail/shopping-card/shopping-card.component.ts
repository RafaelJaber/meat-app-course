import { Component, OnInit } from '@angular/core';
import {ShoppingCardService} from './shopping-card.service';
import {CartItemModel} from './cart-item.model';
import {MenuItemModel} from '../menu-item/menu-item.model';

import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';


@Component({
  selector: 'mt-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
  animations: [
    trigger('row', [
      state('ready', style({
        opacity: 1
      })), transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({
          opacity: 0,
          transform: 'translateX(-30px)',
          offset: 0
        }),
        style({
          opacity: 0.8,
          transform: 'translateX(10px)',
          offset: 0.8
        }),
        style({
          opacity: 1,
          transform: 'translateX(0)',
          offset: 1
        }),
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({
          opacity: 1,
          transform: 'translateX(0px)',
          offset: 0
        }),
        style({
          opacity: 0.8,
          transform: 'translateX(-10px)',
          offset: 0.2
        }),
        style({
          opacity: 0,
          transform: 'translateX(30px)',
          offset: 1
        }),
      ])))
    ])
  ]
})
export class ShoppingCardComponent implements OnInit {

  rowState = 'ready';

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
