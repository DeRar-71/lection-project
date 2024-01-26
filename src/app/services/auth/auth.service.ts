import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILogin} from "../../interfaces/auth/ILogin";
import {IRegister} from "../../interfaces/auth/IRegister";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn: boolean = true;
  constructor(private http: HttpClient) { }

  public login(): boolean {
    return this.isLoggedIn = true;
  }

  public register(register: IRegister): boolean {
    this.http.post('baseUrl/register', register);
    return true;
  }

  public logout(): boolean {
    return this.isLoggedIn = false;
  }
}
