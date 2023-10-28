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

  constructor(private auth: AuthService, private globalService:GlobalService, private router: Router, private activated: ActivatedRoute) { }
  model = {
    title: '',
    content: '',
    type: '',
    price: '',
    itemImg: '',
  }
  buyedItem=true
  singelPost: any
  file: any
  handelDelete(id: any){
    this.globalService.deletePost(id).subscribe(data => {
        // this.posts = this.posts.filter((post: { id: any; }) => post.id!== id);
        console.log(data);
        
    },()=>{

    },()=>{
      this.router.navigateByUrl('/admin')
    })
  }
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
