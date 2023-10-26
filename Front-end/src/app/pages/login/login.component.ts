import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interface/login';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage=''
  modle: Login = {
    email: '',
    password: ''
  }
  constructor(private auth: AuthService ,private router : Router)  { }
  handelsubmit(FormGroup: NgForm){
    if (FormGroup.valid) {
      console.log(FormGroup);
      this.auth.login(this.modle).subscribe(res =>{
      localStorage.setItem('token' , res.data.tokens[res.data.tokens.length-1].token)
      if(res.data.type == 'user'){
        localStorage.setItem('userType' , res.data.type)
        this.router.navigateByUrl('/user')
        setTimeout(() => {
          window.location.reload();
        }, 10);
      }else if(res.data.type == 'admin'){
        localStorage.setItem('userType' , res.data.type)
        this.router.navigateByUrl('/admin')
        setTimeout(() => {
          window.location.reload();
        }, 10);
      }  
      },
      (err)=>{
        console.log(err.error.message)
        this.errorMessage = err.error.message
        
      });
      
    }
  }
}
