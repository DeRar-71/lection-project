import {ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {contentTypeInterceptor} from "./interceptors/contentType/content-type.interceptor";
import {jwtInterceptor} from "./interceptors/jwt/jwt.interceptor";
import {errorInterceptor} from "./interceptors/error/error.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([contentTypeInterceptor, jwtInterceptor, errorInterceptor]),
      withFetch(),
    )
  ]
};
