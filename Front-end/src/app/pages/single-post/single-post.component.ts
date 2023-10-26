import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  singlePost: any
  constructor(private actvated: ActivatedRoute, private globalService: GlobalService) { }
  ngOnInit() {
    let postId = this.actvated.snapshot.paramMap.get('id')
    this.globalService.getSinglePost(postId).subscribe(data => {
      this.singlePost = data.data
    })
  }
}
