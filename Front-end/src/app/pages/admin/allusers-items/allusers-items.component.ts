import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { async } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';
import { UserAuthService } from 'src/app/service/userService/user-auth.service';

@Component({
  selector: 'app-allusers-items',
  templateUrl: './allusers-items.component.html',
  styleUrls: ['./allusers-items.component.css']
})
export class AllusersItemsComponent {
  posts: any =[]
  constructor( private auth: AuthService, private router: Router, private activated: ActivatedRoute, private userAuth: UserAuthService) { }
  ngOnInit(): void {
    this.userAuth.getItemsUser().subscribe(data => {
      if(data.data.length > 0) {
        
        data.data.forEach( (item: any) => {
          let userInfo: any
          let itemInfo:any
          this.auth.getSingleUser(item.userId).subscribe((res)  => {
            userInfo = res.data
          })
          this.auth.getSinglePost(item.itemId).subscribe(res => {
            itemInfo = res.data
            // console.log(itemInfo);
          }),
          Promise.all([this.auth.getSingleUser(item.userId), this.auth.getSinglePost(item.itemId)]).then(() => {
            setTimeout(() => {
            const newObj = Object.assign({}, userInfo, itemInfo);
            console.log(newObj);
            this.posts.push(newObj);
            }, 100);
            
          });
        })
      }
    },(err)=>{
      console.log(err.error);
      
    },()=>{
      
    })
  }
}
