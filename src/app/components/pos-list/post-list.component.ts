import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, map, Observable } from 'rxjs';
import { PostService } from '../../services/post-service';
import { Post } from '../../services/post.api-service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  posts$ = this.postService.postSource$;
  todoForm: FormGroup;
  static id = 5;
  singlePost: Post;

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder
  ) {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
    });
  }
  details(id) {
    this.postService.selectSingleTodo(id);
    this.postService.singlePostSource$.pipe(first()).subscribe((data) => {
      this.singlePost = data;
    });
  }
  ngOnInit() {
    this.postService.initialize();
  }

  onSubmit() {
    const todo: Post = {
      body: 'a',
      id: 1,
      title: 'a',
      userId: 1,
    };
    this.postService.addTodo(todo);
  }

  deleteTodo(todoId: any) {
    console.log(todoId);
    this.postService.delete(todoId);
  }
}
