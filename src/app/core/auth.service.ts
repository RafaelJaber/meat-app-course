import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import {MEAT_API} from '../app.api';
import {ShortUserModel} from '../security/login/short-user.model';
import {NavigationEnd, Router} from '@angular/router';


@Injectable()
export class AuthService {

  shortUser: ShortUserModel;
  lastUrl: string;

  constructor (
    private http: HttpClient,
    private router: Router
  ) {
    this.router.events.filter(e => e instanceof NavigationEnd)
      .subscribe((e: NavigationEnd) => {
        this.lastUrl = e.url
      })
  }

  isLoggedIn(): boolean {
    return this.shortUser !== undefined
  }

  login(email: string, password: string): Observable<ShortUserModel> {
    return this.http.post<ShortUserModel>(`${MEAT_API}api-token-auth/`,
      {username: email, password: password})
      .do(user => this.shortUser = user)
  }

  handleLogin(path: string = this.lastUrl): void {
    this.router.navigate(['/login', btoa(path)])
  }

  logout(): void {
    this.shortUser = undefined
  }
}
