import { Component, OnInit } from '@angular/core';
import {Posts} from "../posts/posts";
import {MenuItem} from "./menu";
import {PostService} from "../posts/post.service";
import {MenuService} from "./menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selectedItem:MenuItem;
  mItems:MenuItem[];
  constructor(private menuService : MenuService) { }

  ngOnInit() {
    this.getMenus();
  }

  onSelectPosts(mItem){
    this.selectedItem = mItem;
    console.log(this.selectedItem.title);
  }

  getMenus():void{
    const mItems = this.menuService.getMenuItems();
    this.mItems = mItems;
  }

}
