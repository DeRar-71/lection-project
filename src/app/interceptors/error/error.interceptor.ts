import { HttpInterceptorFn } from '@angular/common/http';
import {catchError, of, throwError} from "rxjs";
import {inject} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService: AuthService = inject(AuthService);

  return next(req).pipe(catchError((error) => {
    const errorStatus = error.status;

    if (errorStatus === 401) {
      authService.logout();
    }

    return throwError(() => error);
  }));
};
