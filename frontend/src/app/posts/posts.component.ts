import { Component, OnInit } from '@angular/core';
import {Posts} from "./posts";
import {PostService} from "./post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 selectedPost:Posts;
 posts:Posts[];
  constructor(private postService : PostService) { }

  onSelectPosts(post){
    this.selectedPost = post;
    console.log(this.selectedPost.title);
  }

  ngOnInit() {
    this.getPosts()
  }

  getPosts():void{
    const posts = this.postService.getPosts();
    this.posts = posts;
  }

}
