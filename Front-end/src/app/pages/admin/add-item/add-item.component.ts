import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  constructor(private auth: AuthService,private router: Router){}
  model={
    title :'',
    content: '',
    type: '',
    price: '',
  }
  file :any
  handelImg(event: any) {
    this.file =event.target.files[0]
  }
  handelSubmit(FormGroup: NgForm) {
    if (FormGroup.valid) {
    let formData = new FormData()
    formData.append("img", this.file)
    formData.append('title', this.model.title)
    formData.append('content', this.model.content)
    formData.append('type', this.model.type)
    formData.append('price', this.model.price)
    console.log(this.file);
    
    this.auth.addItem(formData).subscribe(data =>{
      console.log(data)
      
    },()=>{

    },()=>{
      this.router.navigateByUrl('/admin')
      
    })
  }}
}
