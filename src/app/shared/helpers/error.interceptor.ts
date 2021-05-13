import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { ToastService } from '../components/toast/toast.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/external/pages/login/login.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toast: ToastService, private router: Router, private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    return next.handle(request).pipe(catchError(err => {
      this.toast.showDanger(err.error.message);
      if (err.status === 401) {
          if (this.router.url.indexOf('/login') === -1) {
              // auto logout if 401 response returned from api
              this.loginService.logout();
              location.reload(true);
          }
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
  }));
  }
}
