import { Component, OnInit } from '@angular/core';
import {RadioOptionModel} from '../shared/radio/radio-option.model';
import {OrderService} from './order.service';
import {CartItemModel} from '../restaurant-detail/shopping-card/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOptionModel[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

  cartItems(): CartItemModel[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItemModel): void {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItemModel): void {
    this.orderService.decreaseQty(item);
  }

  removeItem(item: CartItemModel): void {
    this.orderService.removeItem(item);
  }
}
