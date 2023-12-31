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
