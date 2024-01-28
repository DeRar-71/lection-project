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
        id: 1,
        label: 'Home',
        icon: 'home',
        link: ''
      },
      {
        id: 2,
        label: 'Books',
        icon: 'book',
        link: 'books'
      },
      {
        id: 3,
        label: 'Add book',
        icon: 'library_add',
        link: 'add-book'
      }
    ];

    if (this.authService.isAuthenticated()) {
      return of(navigationItems);
    }

    return of([]);
  }
}
