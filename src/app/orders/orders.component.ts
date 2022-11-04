import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { HttpUtilService } from '../services/http-util.service';
import { UserService } from '../services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  searchF: any;
  allProducts = {
    result: [
      {
        itemId: 1,
        itemName: 'Dolo 650mg',
        storeQuantity: 0,
        type: 'syrup',
        price: 150,
        details: {
          prescription: true,
          description: 'asdasdas dasdasdas dasdasdasdasda sdasdasda sdasdas asdasdasd asdasdas sadasd asdas das das asd asda asdas as asddsa'
        }
      },
      {
        itemId: 2,
        itemName: 'Calpol 650mg',
        storeQuantity: 15,
        type: 'tablet',
        price: 250,
        details: {
          prescription: true,
          description: 'asdasdasda sdasdasdasd asdasd asdasda sdasda sdasdas asdasdasd asdasdas sadasd asdas das das asd asda asdas as asddsa'
        }
      },
      {
        itemId: 3,
        itemName: 'Vitamins 650mg',
        storeQuantity: 18,
        type: 'tablet',
        price: 550,
        details: {
          prescription: true,
          description: 'asdasdasda sdasdasdasdas dasdasdasdasd asdasdasdas asdasdasd asdasdas sadasd asdas das das asd asda asdas as asddsa'
        }
      },
      {
        itemId: 4,
        itemName: 'Something1 650mg',
        storeQuantity: 10,
        type: 'tablet',
        price: 150,
        details: {
          prescription: true,
          description: 'asdasdasdasdas dasdasdasdasdasd asdasdas dasdasdas asdasdasd asdasdas sadasd asdas das das asd asda asdas as asddsa'
        }
      },
      {
        itemId: 5,
        itemName: 'Something2 650mg',
        storeQuantity: 10,
        type: 'tablet',
        price: 150,
        details: {
          prescription: true,
          description: 'asdasdasda sdasdasdasda sdasda sdasdasda sdasdasdas asdasdasd asdasdas sadasd asdas das das asd asda asdas as asddsa'
        }
      },
      {
        itemId: 6,
        itemName: 'Something3 650mg',
        storeQuantity: 10,
        type: 'tablet',
        price: 150,
        details: {
          prescription: true,
          description: 'asdasdasda sdasdasda sdasdasdasda sdasdasda sdasdas asdasdasd asdasdas sadasd asdas das das asd asda asdas as asddsa'
        }
      },
      {
        itemId: 7,
        itemName: 'Something4 650mg',
        storeQuantity: 10,
        type: 'tablet',
        price: 150,
        details: {
          prescription: true,
          description: 'asdasdasdasda sdasdasdasdasd  asdasdasd  asdasdasdas asdasdasd asdasdas sadasd asdas das das asd asda asdas as asddsa'
        }
      },
      {
        itemId: 8,
        itemName: 'Something5 650mg',
        storeQuantity: 10,
        type: 'tablet',
        price: 150,
        details: {
          prescription: true,
          description: 'asdasd asdasdasdas dasdasdasd asdasdasd asdasdasdas asdasdasd asdasdas sadasd asdas das das asd asda asdas as asddsa'
        }
      },
      {
        itemId: 9,
        itemName: 'Something6 650mg',
        storeQuantity: 10,
        type: 'tablet',
        price: 150,
        details: {
          prescription: true,
          description: 'asdasdasda sdasdasd asdasdasdas dasdasdasdasdasdas asdasdasd asdasdas sadasd asdas das das asd asda asdas as asddsa'
        }
      }
    ]
  };
  allProductsList: any;
  constructor(
    public fb: FormBuilder,
    public user: UserService,
    public http: HttpUtilService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    of(this.allProducts).subscribe(
      (data) => {
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
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user.cart.details = [];
      this.user.cart.presence = [];
    });
  }

}
