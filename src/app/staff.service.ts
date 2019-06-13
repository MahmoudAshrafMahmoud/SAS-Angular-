import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem("staffLogin", token)
  }
  getToken() {
    return localStorage.getItem("staffLogin")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  // logout() {
  //   localStorage.removeItem("studentLogin");
  //   this.myRoute.navigate(["home"]);
  // }
}

