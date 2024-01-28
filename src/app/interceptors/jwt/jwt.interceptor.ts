import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {TokenService} from "../../services/token/token.service";

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);

  if (tokenService.existToken()) {
    let headers = req.headers.append('Authorization', `Bearer ${tokenService.getToken()}`);

    const newReq = req.clone({
      headers: headers
    })

    return next(newReq);
  }

  return next(req);
};
