import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserAuthenticated = false;

  constructor() {
  }

  getIsUserAuthenticated() {
    return this.isUserAuthenticated;
  }

  login() {
    this.isUserAuthenticated = true;
  }

  logout() {
    this.isUserAuthenticated = false;
  }

  register() {
  }
}
