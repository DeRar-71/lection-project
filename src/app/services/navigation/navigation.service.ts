import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {INavigationItem} from "../../interfaces/INavigationItem";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private authService: AuthService) { }

  getNavigationItems(): Observable<INavigationItem[]> {
    const navigationItems: INavigationItem[] = [
      {
        id: '1',
        label: 'Home',
        icon: 'home',
        link: '/home'
      },
      {
        id: '2',
        label: 'Books',
        icon: 'book',
        link: 'books'
      }
    ];

    if (this.authService.isLoggedIn) {
      return of(navigationItems);
    }

    return of([]);
  }
}
