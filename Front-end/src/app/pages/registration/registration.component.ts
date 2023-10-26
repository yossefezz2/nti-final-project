import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/interface/sign-up';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  modle: SignUp = {
    fname: '',
    lname: '',
    email: '',
    password: ''
  }
  constructor(private auth: AuthService, private router:Router) { }
  handelsubmit(FormGroup: NgForm){
    if (FormGroup.valid) {
      console.log(FormGroup);
      this.auth.addUser(this.modle).subscribe(data =>{
        console.log(data);
      }, (err) => {
        console.log(err.error.data)

      }, () => {
        this.router.navigateByUrl('/login')
      })
      
    }
  }
}