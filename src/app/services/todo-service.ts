import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo, TodoApiService } from './todo.api-service';

@Injectable()
export class TodoService {
  private readonly todosSubject = new BehaviorSubject<Todo[]>([]);
  todoSource$ = this.todosSubject.asObservable();
  private readonly singleTodoSubject = new BehaviorSubject<Todo>(null);
  singleTodoSource$ = this.singleTodoSubject.asObservable();

  private todos: Todo[] = [];
  constructor(private todoApiService: TodoApiService) {}

  

  initialize() {
    this.todoApiService.loadAll().subscribe((data) => {
      this.todos = data;
      this.todosSubject.next([...this.todos]);
    });
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosSubject.next(this.todos);
  }
  delete(todo: Todo) {
    const todoToBeDeleted = this.todos.find((x) => x.id === todo.id);
    const i = this.todos.indexOf(todoToBeDeleted);
    this.todos.splice(i, 1);
    this.todosSubject.next([...this.todos]);
  }
  selectSingleTodo(id) {
    const selected = this.todos.find((x) => x.id == id);
    this.singleTodoSubject.next(selected);
  }
}
