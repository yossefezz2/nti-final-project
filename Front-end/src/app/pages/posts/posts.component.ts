import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any =[]
  isLoading = true
  p:any
  total :any
  constructor(private globalService: GlobalService,private auth: AuthService) { }
  pageChanged(eve: any) {
    console.log(eve);
    
    this.p=eve
  }
  ngOnInit(): void {
    this.auth.getManyPost().subscribe(data => {
      this.posts = data;
      this.total=this.posts.length;
    },()=>{

    },()=>{
      this.isLoading = false;
    })
  }
}
