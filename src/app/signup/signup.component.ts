import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpUtilService } from '../services/http-util.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    email: [''],
    password: [''],
    confirmPassword: ['']
  });

  constructor(
    private fb: FormBuilder,
    public http: HttpUtilService,
    public toastr: ToastrService,
    private router: Router,
  ) { }
  workInProgress = false;
  ngOnInit(): void {
  }

  onSubmit(){
    const data = {
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    };
    console.log('data in signup', data);
    if(this.signupForm.value.password === this.signupForm.value.confirmPassword){
      this.http.signUp(data).subscribe(
        next => {
          this.toastr.success('Successfully Signed Up!', 'Please Log in!');
          this.router.navigate(['/login']);
      },
        error =>{
        console.log(error);
        this.toastr.error('Error Encountered!', 'Please try again!');
      });
    }
    else{
      this.toastr.error('Password and Confirm Password mismatch!')
    }
  }
}
