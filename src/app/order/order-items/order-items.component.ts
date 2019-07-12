import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CartItemModel} from '../../restaurant-detail/shopping-card/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItemModel[];

  @Output() increaseQty = new EventEmitter<CartItemModel>();
  @Output() decreaseQty = new EventEmitter<CartItemModel>();
  @Output() remove = new EventEmitter<CartItemModel>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItemModel): void {
    this.increaseQty.emit(item);
  }
  emitDecreaseQty(item: CartItemModel): void {
    this.decreaseQty.emit(item);
  }
  emitRemove(item: CartItemModel): void {
    this.remove.emit(item);
  }
}
