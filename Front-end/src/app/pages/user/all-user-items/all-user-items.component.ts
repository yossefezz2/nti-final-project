import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { GlobalService } from 'src/app/service/global.service';
import { UserAuthService } from 'src/app/service/userService/user-auth.service';

@Component({
  selector: 'app-all-user-items',
  templateUrl: './all-user-items.component.html',
  styleUrls: ['./all-user-items.component.css']
})
export class AllUserItemsComponent {
  posts: any =[]
  constructor( private auth: AuthService, private router: Router, private activated: ActivatedRoute, private userAuth: UserAuthService) { }
  ngOnInit(): void {
    this.userAuth.getItemsUser().subscribe(data => {
      if(data.data.length > 0) {
        data.data.forEach((item: any) => {
          this.auth.getSinglePost(item.itemId).subscribe(res => {
            this.posts.push(res.data);
          })
        })
      }
    },(err)=>{
      console.log(err.error);
      
    },()=>{
      
    })

//   onLoaded(evt:any)
// {
//   let img = document.querySelector('img');
//   let canvas = document.querySelector('#output');
//   let ctx = canvas.getContext('2d');
//   ctx.fillStyle = '#fff';
//   ctx.fillRect(0,0,759,759);
//   ctx.drawImage(img, 0, 250);}
}

}
