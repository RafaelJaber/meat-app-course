import {CanLoad, Route} from '@angular/router';
import {AuthService} from '../core/auth.service';
import {Injectable} from '@angular/core';


@Injectable()
export class LoggedinGuard implements CanLoad {

  constructor(
    private auth: AuthService,
  ) {}

  canLoad(route: Route): boolean {
    const loggedIn = this.auth.isLoggedIn();
    if (!loggedIn) {
      this.auth.handleLogin(`/${route.path}`)
    }
    return loggedIn;
  }

}
