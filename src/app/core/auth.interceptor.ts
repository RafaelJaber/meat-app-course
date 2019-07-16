import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable, Injector} from '@angular/core';
import {AuthService} from './auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // Se der algum erro de loop na requisição usa o Injector ao inves de declarar o serviço no construtor
  constructor(
    private injector: Injector
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = this.injector.get(AuthService);

    if (auth.isLoggedIn()) {
      const authRequest = req.clone({
        setHeaders: {'Authorization': `Token ${auth.shortUser.token}`}
      });
      return next.handle(authRequest)
    } else {
      return next.handle(req);
    }
  }
}
