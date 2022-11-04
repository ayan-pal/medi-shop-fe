import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { HttpUtilService } from '../services/http-util.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  searchForm = this.fb.group({
    search: ['']
  });
  allProducts = {
    result: [
      {
        itemId: 1,
        itemName: 'Dolo 650mg',
        storeQuantity: 10,
        type: 'tablet',
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
    public http: HttpUtilService
  ) { }

  ngOnInit(): void {
    of(this.allProducts).subscribe(
      (data) => {
        this.allProductsList = data;
      }
    )
  }

}
