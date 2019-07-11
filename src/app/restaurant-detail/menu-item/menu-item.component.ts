import {Component, Input, OnInit} from '@angular/core';
import {MenuItemModel} from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItemModel;

  constructor() { }

  ngOnInit() {
  }

}
