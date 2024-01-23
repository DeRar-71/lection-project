import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {INavigationItem} from "../../interfaces/INavigationItem";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  getNavigationItems(): Observable<INavigationItem[]> {
    const navigationItems: INavigationItem[] = [
      {
        id: '1',
        label: 'Home',
        icon: 'home',
        link: 'home'
      },
      {
        id: '2',
        label: 'Books',
        icon: 'book',
        link: 'books'
      }
    ];

    return of(navigationItems);
  }
}
