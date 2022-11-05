import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
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

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {
    this.todoForm = this.formBuilder.group({
      todo: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.todoService.initialize();
  }

  onSubmit() {
    const todo: Todo = {
      id: ++TodoListComponent.id,
      value: `Value ${TodoListComponent.id}`,
    };
    this.todoService.addTodo(todo);
  }

  deleteTodo(todoId: any) {
    console.log(todoId);
    this.todoService.delete(todoId);
  }
}
