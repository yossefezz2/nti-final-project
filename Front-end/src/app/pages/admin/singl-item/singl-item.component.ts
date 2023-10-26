import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-singl-item',
  templateUrl: './singl-item.component.html',
  styleUrls: ['./singl-item.component.css']
})
export class SinglItemComponent {
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
      })
    })
  }
}
