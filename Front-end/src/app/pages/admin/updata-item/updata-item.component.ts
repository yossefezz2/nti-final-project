import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-updata-item',
  templateUrl: './updata-item.component.html',
  styleUrls: ['./updata-item.component.css']
})
export class UpdataItemComponent {
  postId:any 
  constructor(private auth: AuthService, private router: Router, private activated: ActivatedRoute) { }
  model = {
    title: '',
    content: '',
    type: '',
    price: '',
    itemImg: '',
  }
  singelPost: any
  file: any
  ngOnInit() {
    this.activated.paramMap.subscribe(params => {
      // console.log(res)
      this.postId = params.get('id')
      this.auth.getSinglePost(this.postId).subscribe(res => {
        this.model = res.data
        console.log(this.model);

      })
    })
  }
  handelImg(event: any) {
    this.file = event.target.files[0]
  }
  handelSubmit(FormGroup: NgForm) {
    if (FormGroup.valid) {
      let formData = new FormData()
      formData.append("img", this.file ? this.file : this.model.itemImg)
      formData.append('title', this.model.title)
      formData.append('content', this.model.content)
      formData.append('type', this.model.type)
      console.log(this.file);

      this.auth.UpdateItem(formData,this.postId).subscribe(data => {
        console.log(data)
        this.router.navigateByUrl('/admin')
      }, (err) => {
        console.log(err.error.data)

      }, () => {


      })
    }
  }
}
