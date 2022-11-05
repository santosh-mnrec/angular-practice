import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { HttpClientModule } from '@angular/common/http';
import { TodoApiService } from './services/todo.api-service';
import { TodoService } from './services/todo-service';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, TodoListComponent],
  bootstrap: [AppComponent],
  providers: [TodoApiService, TodoService],
})
export class AppModule {}
