import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { GlobalService } from 'src/app/service/global.service';
import { UserAuthService } from 'src/app/service/userService/user-auth.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  postId: any

  constructor(private auth: AuthService, private router: Router, private activated: ActivatedRoute, private userAuth: UserAuthService) { }
  model = {
    title: '',
    content: '',
    type: '',
    price: '',
    itemImg: '',
  }



  handelDelete(id: any) {
    // this.userAuth.deletePost(id).subscribe(data => {
    //   // this.posts = this.posts.filter((post: { id: any; }) => post.id!== id);
    //   console.log(data);

    // }, () => {

    // }, () => {
    //   this.router.navigateByUrl('/userShop')
    // })
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
