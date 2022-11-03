import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn: boolean = false;
  email: string;
  result: any;

  constructor() { 
    this.loggedIn = false;
    this.email = '';
  }
}
