import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {OrderComponent} from '../order/order.component';
import {Injectable} from '@angular/core';
import {OrderService} from '../order/order.service';


@Injectable()
export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  constructor(
    private order: OrderService
  ) {}

  canDeactivate(orderComponent: OrderComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!orderComponent.isOrderCompleted()) {
      let stateOrder = window.confirm('Deseja desistir da compra?');
      if (stateOrder) {
        this.order.clear();
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }
}
