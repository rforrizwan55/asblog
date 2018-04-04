import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PostsComponent } from './posts/posts.component';

import {
  MatCardModule, MatInputModule, MatToolbarModule
} from '@angular/material';
import {PostService} from "./posts/post.service";
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import {MenuService} from "./menu/menu.service";

@NgModule({
  exports: [MatCardModule,MatToolbarModule],
  declarations: [
    AppComponent,
    PostsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [PostService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
