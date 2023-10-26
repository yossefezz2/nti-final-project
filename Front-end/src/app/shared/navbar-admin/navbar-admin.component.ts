import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {
  constructor(private router : Router) { }
  handlLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    this.router.navigateByUrl('/login')
    setTimeout(() => {
      window.location.reload();
    }, 10);
  }
}
