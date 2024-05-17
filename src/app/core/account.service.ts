import { Injectable, inject } from '@angular/core';
import { User } from './models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isLoggedIn = false;
  constructor(private router: Router) {
     
  }
  
  login(obj:User): boolean {
    if(obj.email == 'admin' && obj.password === '123'){
      this.isLoggedIn = true;
       console.log(this.isLoggedIn);

      this.router.navigateByUrl('/deptList');
      return true;
    }
    return false;

  }
}
