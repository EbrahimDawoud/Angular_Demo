import { Injectable, inject } from '@angular/core';
import { User } from './models/User';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isLoggedIn = false;
  constructor(private router: Router, private http: HttpClient) {
     
  }
  
  login(obj:User): void {
    this.http.post("https://localhost:7041/api/Account", {userName:obj.email, password:obj.password}, {responseType:'text'}).subscribe(
      token => {
        console.log('Token:', token);
        console.log('Login successful');
        localStorage.setItem("token", token);
        this.isLoggedIn = true;
        this.router.navigateByUrl('/deptList');

      },
      error => {
        console.error('Login error', error);
        this.isLoggedIn = false;
        localStorage.removeItem("token");
      }  

    );
  }   
}
