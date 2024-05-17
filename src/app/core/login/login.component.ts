import { Component } from '@angular/core';
import { User } from '../models/User';
import { AccountService } from '../account.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errMsg:string="";
  user:User = {email:'', password:'', id:1, name:''};
  
  constructor(public accService:AccountService) { }
    login()
      {
        console.log(this.user)
        this.errMsg=(this.accService.login(this.user)?"":"Login Failed! UserName or Password is wrong");
      }
  }
  



  
