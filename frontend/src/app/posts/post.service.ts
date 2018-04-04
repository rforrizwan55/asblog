import { Injectable } from '@angular/core';
import { Posts} from "./posts";

const posts = [{
  id:1,
  title:"test",
  content:"test 1243",
  created: new Date(),
  updated: new Date(),
  user:"test"
},
  {
    id:3,
    title:"test",
    content:"test 1243",
    created: new Date(),
    updated: new Date(),
    user:"test"
  },
  {
    id:4,
    title:"test",
    content:"test 1243",
    created: new Date(),
    updated: new Date(),
    user:"test"
  }];

@Injectable()
export class PostService {

  constructor() { }

  getPosts(): Posts[]{
    return posts;
  }

}
