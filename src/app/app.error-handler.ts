import {HttpErrorResponse} from '@angular/common/http';
import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core';
import {NotificationService} from './core/notification.service';
import {AuthService} from './core/auth.service';


@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {

  constructor(
    private notification: NotificationService,
    private injector: Injector,
    private zone: NgZone
  ) {
    super()
  }

  handleError(errorResponse: HttpErrorResponse | any) {
    if (errorResponse instanceof HttpErrorResponse) {
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 401:
            this.injector.get(AuthService).handleLogin();
            break;
          case 403:
            this.notification.notify('Acesso não autorizado.');
            break;
          case 404:
            this.notification.notify('Recurso não encontrado, verifique sua internet');
            break;
        }
      })
    }
    super.handleError(errorResponse)
  }
}
