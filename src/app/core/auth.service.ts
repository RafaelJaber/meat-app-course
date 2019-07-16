import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {MEAT_API} from '../app.api';
import {ShortUserModel} from '../security/login/short-user.model';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {

  shortUser: ShortUserModel;

  constructor (
    private http: HttpClient,
    private router: Router
  ) {}

  isLoggedIn(): boolean {
    return this.shortUser !== undefined
  }

  login(email: string, password: string): Observable<ShortUserModel> {
    return this.http.post<ShortUserModel>(`${MEAT_API}api-token-auth/`,
      {username: email, password: password})
      .do(user => this.shortUser = user)
  }

  handleLogin(path?: string): void {
    this.router.navigate(['/login', btoa(path)])
  }

  logout(): void {
    this.shortUser = undefined
  }
}
