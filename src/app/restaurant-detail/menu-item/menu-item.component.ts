import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {MenuItemModel} from './menu-item.model';

import {trigger, state, style, animate, transition} from '@angular/animations';


@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations: [
    trigger('menuItem', [
      state('ready', style({
        opacity: 1
      })), transition('void => ready', [
        style({
          opacity: 0,
          transform: 'translateY(-50px)'
        }), animate('250ms 0s ease-in-out')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItemModel;
  @Output() add = new EventEmitter();

  menuState = 'ready';

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }

}
