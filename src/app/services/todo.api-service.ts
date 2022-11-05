import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class TodoApiService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
  }

  loadAll() {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
  }

  create(todo: Todo) {
    return this.http.post(`${this.baseUrl}/todos`, JSON.stringify(todo));
  }

  delete(todoId: number) {
    return this.http.delete(`${this.baseUrl}/todos/${todoId}`);
  }
}
