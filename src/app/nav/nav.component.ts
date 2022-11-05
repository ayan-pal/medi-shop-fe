import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    public user:UserService,
    private router: Router,
  ) { }
  ngOnInit(): void {
  }

  goToOrders(){
    this.router.navigate(['/orders']);
  }

  logOut(){
    this.user.loggedIn = false;
    this.user.email = '';
    this.user.cart = {
      details: [],
      presence: []
    };
    this.user.orders = [];
    this.router.navigate(['/login']);
  }
}
