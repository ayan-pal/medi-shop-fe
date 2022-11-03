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
}
