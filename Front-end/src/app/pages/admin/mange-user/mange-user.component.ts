import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-mange-user',
  templateUrl: './mange-user.component.html',
  styleUrls: ['./mange-user.component.css']
})
export class MangeUserComponent {
  posts: any =[]
  constructor(private globalService: GlobalService) { }
  handelDelete(id: any){
    this.globalService.deleteUser(id).subscribe(res => {
        // this.posts = this.posts.filter((post: { id: any; }) => post.id!== id);
        console.log(res);
        
    },()=>{

    },()=>{
      window.location.reload();
    })

  }
  ngOnInit(): void {
    this.globalService.getUsers().subscribe(data => {
      this.posts = data.data;
    },(err)=>{
      console.log(err.error);
      
    },()=>{
      
    })}
}
