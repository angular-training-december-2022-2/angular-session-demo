import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;

  constructor() { }

  setLogin(): void{
    this.loggedIn = true;
  }

  setLogout(): void{
    this.loggedIn = false;
  }

  storeToken(token: string): void{
    sessionStorage.setItem("jwt-token", token);
  }

  retrieveToken(): string | null{
    return sessionStorage.getItem("jwt-token");
  }

  removeToken(): void{
    sessionStorage.removeItem("jwt-token");
  }
}
