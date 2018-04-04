import { Injectable } from '@angular/core';
import {MenuItem} from "./menu";

const mItems = [{
  id:1,
  title:"Home",
  path:"/"
},
  {
    id:3,
    title:"About me",
    path:"/"
  },
  {
    id:4,
    title:"Blog",
    path:"/blog"
  },
  {
    id:4,
    title:"Contact",
    path:"/blog"
  }];

@Injectable()
export class MenuService {

  constructor() { }

  getMenuItems(): MenuItem[]{
    return mItems;
  }

}
