import { Component } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent {
  posts: any =[]
  constructor(private globalService: GlobalService) { }
  
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
