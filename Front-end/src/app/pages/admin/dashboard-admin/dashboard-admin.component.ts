import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {
  posts: any =[]
  constructor(private globalService: GlobalService) { }
  handelDelete(id: any){
    this.globalService.deletePost(id).subscribe(res => {
        // this.posts = this.posts.filter((post: { id: any; }) => post.id!== id);
        console.log(res);
        
    },()=>{

    },()=>{
      window.location.reload();
    })

  }
  ngOnInit(): void {
    this.globalService.getposts().subscribe(data => {
      this.posts = data.data;
    },(err)=>{
      console.log(err.error);
      
    },()=>{
      
    })
  }
}
