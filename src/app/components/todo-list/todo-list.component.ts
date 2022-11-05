import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, map, Observable } from 'rxjs';
import { TodoService } from '../../services/todo-service';
import { Todo } from '../../services/todo.api-service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos$ = this.todoService.todoSource$;
  todoForm: FormGroup;
  static id = 5;
  singleTodo: Todo;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
    });
  }
  details(id) {
    this.todoService.selectSingleTodo(id);
    this.todoService.singleTodoSource$.pipe(first()).subscribe((data) => {
      console.log(data);
      this.singleTodo = data;
    });
  }
  ngOnInit() {
    this.todoService.initialize();
  }

  onSubmit() {
    const todo: Todo = {
      completed: false,
      id: TodoListComponent.id++,
      title: 'test',
      userId: 1,
    };
    this.todoService.addTodo(todo);
  }

  deleteTodo(todoId: any) {
    console.log(todoId);
    this.todoService.delete(todoId);
  }
}
