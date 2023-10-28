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
  itemId: any

  constructor(private auth: AuthService, private router: Router, private activated: ActivatedRoute, private userAuth: UserAuthService) { 
    
  }
  model = {
    title: '',
    content: '',
    type: '',
    price: '',
    itemImg: '',
  }
buyed=true


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
      this.itemId = params.get('id')
      this.auth.getSinglePost(this.itemId).subscribe(res => {
        this.model = res.data
      })
    })
    this.checkItem();
  }
  handelSubmit() {
    this.userAuth.addItem(this.itemId).subscribe(res => {
      console.log(res.data);
      
      this.router.navigateByUrl('/user')
    })
  }
  checkItem() {
    this.userAuth.checkItem(this.itemId).subscribe(res => {
      if(res.data.length > 0){
        this.buyed=false
      }else{
        this.buyed=true
      }
      
    })
  }
  handleDelete() {
    this.userAuth.deletedItem(this.itemId).subscribe(res => {
      this.router.navigateByUrl('/user')
    })
  }
  
}
