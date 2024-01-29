import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {INavigationItem} from "../../interfaces/INavigationItem";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private navigationItems: INavigationItem[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getNavigationItems(): Observable<INavigationItem[]> {
    if (this.navigationItems.length > 0) {
      return of(this.navigationItems);
    }

    return this.httpClient.get<INavigationItem[]>('/assets/navigation-config.json');
  }
}
