import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {ShortUserModel} from '../../security/login/short-user.model';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  user(): ShortUserModel {
    return this.auth.shortUser
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn()
  }

  login() {
    this.auth.handleLogin()
  }

  logout() {
    this.auth.logout()
  }
}
