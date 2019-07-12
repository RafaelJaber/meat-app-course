import { Component, OnInit } from '@angular/core';
import {RadioOptionModel} from '../shared/radio/radio-option.model';
import {OrderService} from './order.service';
import {CartItemModel} from '../restaurant-detail/shopping-card/cart-item.model';
import {OrderItemModel, OrderModel} from './order.model';
import {Router} from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOptionModel[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ];

  constructor(
    private orderService: OrderService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
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

  checkOrder(order: OrderModel): void {
    order.orderItems = this.cartItems()
      .map((item: CartItemModel) => new OrderItemModel(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order)
      .subscribe((orderId: number) => {
        this.route.navigate(['/order-summary']);
        console.log(`Compra concluida: ${orderId}`);
        this.orderService.clear();
      });
  }
}
