import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(public http:HttpClient) { }

  logIn(data: any) {
    return this.http.get(`${environment.apiUrl}/user/login-user`, {params: data});
  }

  signUp(data: any){
    return this.http.post(`${environment.apiUrl}/user/add-user`, data, httpOptions);
  }

  allProducts(){
    return this.http.get(`${environment.apiUrl}/medicine/allmeds`);
  }

  placeOrder(data: any){
    return this.http.post(`${environment.apiUrl}/order/add`, data, httpOptions);
  }
}
