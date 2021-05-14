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
      let showError = err;
      if(err.error && err.error.hasOwnProperty('validation')){
        if(err.error.validation.body && err.error.validation.body.message){
          showError = err.error.validation.body.message;
        }
      }
      if(err.error && err.error.hasOwnProperty('message')){
          showError = err.error.message;
      }

      this.toast.showDanger(showError);
      if (err.status === 401) {
          if (this.router.url.indexOf('/login') === -1) {
              // auto logout if 401 response returned from api
              this.loginService.logout();
              location.reload(true);
          }
      }

      const error = err.error && err.error.message ? err.error.message : err;
      return throwError(error);
  }));
  }
}
