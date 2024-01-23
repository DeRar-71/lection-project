import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
   const authService = inject(AuthService);
   const router = inject(Router);

   if (!authService.isLoggedIn) {
     return router.createUrlTree(['/login']);
   }

   return true;
};
