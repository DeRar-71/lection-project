import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ILogin} from "../../interfaces/auth/ILogin";
import {IRegister} from "../../interfaces/auth/IRegister";
import {Observable, tap} from "rxjs";
import {API_URLS} from "../../../api.config";
import {environment} from "../../../environments/environment";
import {TokenService} from "../token/token.service";
import {ILoginServerData} from "../../interfaces/auth/ILoginServerData";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
    private router: Router,
  ) { }

  public login(loginData: ILogin): Observable<any> {
    return this.httpClient
      .post<ILoginServerData>(environment.apiUrl + API_URLS.login, loginData)
      .pipe(
        tap({
          next: (result: ILoginServerData ): void=> {
            if (result && result.accessToken) {
              this.tokenService.saveToken(result.accessToken);
            }
          }, error: (error: any): void=> {
            console.error(error);
          }
        })
      );
  }

  public register(registerData: IRegister): Observable<any> {
    return this.httpClient
      .post(environment.apiUrl + API_URLS.register, registerData);
  }

  public logout(): void {
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    return this.tokenService.existToken();
  }

}
