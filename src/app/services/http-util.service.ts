import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(public http:HttpClient) { }

  logIn() {
    return this.http.get();
  }
}
