import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

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

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  orderForm: FormGroup;

  delivery: number = 8;

  paymentOptions: RadioOptionModel[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ];

  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConf: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      complement: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo});
  }

  // tslint:disable-next-line:member-ordering
  static equalsTo(group: AbstractControl): {[key: string]: boolean} {
    const email = group.get('email');
    const emailConf = group.get('emailConf');
    if (!email || !emailConf) {
      return undefined;
    }
    if (email.value !== emailConf.value) {
      return {emailNotMarch: true};
    }
    return undefined;
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
