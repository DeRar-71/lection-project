import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";
import {inject} from "@angular/core";

export const authChildGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (!authService.isAuthenticated()) {
    return router.navigate(['/login']);
  }

  return true;
};
