import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './components/pos-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostApiService } from './services/post.api-service';
import { PostService } from './services/post-service';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, PostListComponent, PostComponent],
  bootstrap: [AppComponent],
  providers: [PostApiService, PostService],
})
export class AppModule {}
