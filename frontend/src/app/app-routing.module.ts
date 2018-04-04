import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  {
    path:'blog',
    component:PostsComponent
  }
];


@NgModule({
  exports:[RouterModule],
  imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
