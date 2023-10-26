import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-advanced';
  isUser: boolean = false;
  isAdmin: boolean = false;

  constructor() {
    this.isUser = localStorage.getItem('userType') == 'user'
    this.isAdmin = localStorage.getItem('userType') == 'admin'
  }
}
