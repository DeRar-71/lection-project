import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: boolean = true;
  constructor() { }

  public authorization(): boolean {
    return this.isLoggedIn = true;
  }

  public logout(): boolean {
    return this.isLoggedIn = false;
  }
}
