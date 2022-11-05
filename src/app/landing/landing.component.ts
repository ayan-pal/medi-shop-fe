import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PastOrderDialogComponent } from '../past-order-dialog/past-order-dialog.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private router: Router,
    public user: UserService,
    public dialog: MatDialog,
  ) { 
    this.noOrders = 0;
  }
  orderList: any;
  noOrders: number;
  ngOnInit(): void {
    this.orderList = this.user.orders;
    this.noOrders = this.orderList.length;
  }

  goToConstruction(){
    this.router.navigate(['/construction']);
  }

  goToOrders(){
    this.router.navigate(['/orders']);
  }

  onDialog(eachOrder: any){
    const dialogRef = this.dialog.open(PastOrderDialogComponent, {
      data: {
        eachOrder
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user.cart.details = [];
      this.user.cart.presence = [];
    });
  }
}
