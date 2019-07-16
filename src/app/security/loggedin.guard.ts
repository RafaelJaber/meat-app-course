import {CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../core/auth.service';
import {Injectable} from '@angular/core';


@Injectable()
export class LoggedinGuard implements CanLoad, CanActivate{

  constructor(
    private auth: AuthService,
  ) {}

  checkAuthentication(path: string): boolean {
    const loggedIn = this.auth.isLoggedIn();
    if (!loggedIn) {
      this.auth.handleLogin(`/${path}`)
    }
    return loggedIn;
  }

  canLoad(route: Route): boolean {
    return this.checkAuthentication(route.path)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkAuthentication(route.routeConfig.path)
  }

}
