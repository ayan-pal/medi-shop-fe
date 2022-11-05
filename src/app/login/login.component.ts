import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { HttpUtilService } from '../services/http-util.service';
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

  workInProgress = false;

  constructor(
    public fb: FormBuilder,
    public user: UserService,
    private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastrService,
    public http: HttpUtilService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const param = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    console.log('Button Clicked', param);
    this.http.logIn(param).subscribe(
      (data: any) => {
        if (data.loggedIn){
          // Successfully logged in.
          console.log('Data on successful login', data);
          this.toastr.success('Successful', data.message);
          this.user.loggedIn = data.loggedIn;
          this.user.email = data.email;
          this.user.orders = data.pastOrders;
          console.log(data.pastOrders)
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
