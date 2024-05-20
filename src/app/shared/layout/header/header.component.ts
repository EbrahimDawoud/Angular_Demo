import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../../core/account.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(public accService:AccountService,private router :Router) { }
  logout(){
    this.accService.isLoggedIn = false;
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');

  }
}
