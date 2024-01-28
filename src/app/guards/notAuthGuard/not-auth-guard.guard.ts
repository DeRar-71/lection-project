import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";

export const notAuthGuardGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.isAuthenticated()) {
    return router.navigate(['/']);
  }

  return true;
};
