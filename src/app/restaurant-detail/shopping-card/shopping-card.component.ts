import { Component, OnInit } from '@angular/core';
import {ShoppingCardService} from './shopping-card.service';
import {CartItemModel} from './cart-item.model';

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

}
