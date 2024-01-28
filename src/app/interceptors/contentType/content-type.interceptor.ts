import { HttpInterceptorFn } from '@angular/common/http';

export const contentTypeInterceptor: HttpInterceptorFn = (req, next) => {
  let headers = req.headers.append('Content-Type', 'application/json');

  const newReq = req.clone({
    headers: headers
  })
  return next(newReq);
};
