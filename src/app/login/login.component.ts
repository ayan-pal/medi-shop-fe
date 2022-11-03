import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  loginResult = {
    message: 'logged_in',
    loggedIn: true,
    email: 'imaginefocused@gmail.com',
    cart: [
      {
        itemId: 1,
        quantity: 3,
        itemName: 'Calpol 500mg',
        price: 50,
      },
      {
        itemId: 4,
        itemName: 'Dolo 650mg',
        quantity: 6,
        price: 169,
      },
    ],
    pastOrders: [] // Need to discuss
  };
  workInProgress = false;

  constructor(
    public fb: FormBuilder,
    public user: UserService,
    private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const param = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    console.log('Button Clicked', param);
    of(this.loginResult).subscribe(
      (data) => {
        if (data.loggedIn){
          // Successfully logged in.
          this.toastr.success('Successful', data.message);
          this.user.loggedIn = true;
          this.user.email = data.email;
          this.user.result = data;
          this.router.navigate(['/landing']);
        }
        else {
          // Unable to log in
          this.toastr.error('Error Encountered!', data.message);
        }
      }
    )
  }

}
