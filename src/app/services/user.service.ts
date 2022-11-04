import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn: boolean = false;
  email: string;
  result: any;
  cart: any;

  constructor() { 
    this.loggedIn = false;
    this.email = '';
    this.cart = {
      details: [],
      presence: []
    };
  }
}
