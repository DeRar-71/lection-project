import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public existToken(): boolean {
    return localStorage.getItem('token') !== null;
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public clearToken(): void {
    return localStorage.removeItem('token');
  }
}
