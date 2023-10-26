import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(private auth: AuthService) { }
  handelsubmit(FormGroup: NgForm){
    if (FormGroup.valid) {
      console.log(FormGroup);
      this.auth.addUser(this.modle).subscribe(data =>{
        console.log(data);
      });
      
    }
  }
}