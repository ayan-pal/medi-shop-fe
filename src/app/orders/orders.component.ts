import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { HttpUtilService } from '../services/http-util.service';
import { UserService } from '../services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  searchF: any;
  allProductsList: any;
  constructor(
    public fb: FormBuilder,
    public user: UserService,
    public http: HttpUtilService,
    public dialog: MatDialog,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.http.allProducts().subscribe(
      (data) => {
        console.log('Products Fetched');
        this.allProductsList = data;
      }
    )
  }

  addToCart(eachMed: any){
    eachMed['quantity'] = 1;
    this.user.cart.details.push(eachMed);
    this.user.cart.presence.push(eachMed.itemId);
    console.log('Cart view', this.user.cart);
  }

  checkPresence(id: number){
    return this.user.cart.presence.includes(id);
  }

  onAdd(i: number){
    this.user.cart.details[i].quantity = this.user.cart.details[i].quantity + 1; 
  }

  onRemove(i: number){
    this.user.cart.details[i].quantity = this.user.cart.details[i].quantity - 1; 
  }

  onDelete(i: number){
    this.user.cart.details.splice(i, 1);
  }

  openDialog(): void {
    // First we will have to call the place order api.
    const data = {
      "email": "imaginefocused@gmail.com",
      "ordered_items": this.user.cart.details
    };
    console.log('Data for order API', data);
    this.http.placeOrder(data).subscribe(
      (data) => {
        this.toastr.success('Order Placed!');
        const dialogRef = this.dialog.open(DialogComponent, {
          data: {
          },
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.user.cart.details = [];
          this.user.cart.presence = [];
        });
      },
      (error) => {
        this.toastr.error('Unable to place order!');
      }
    );
  }
}
