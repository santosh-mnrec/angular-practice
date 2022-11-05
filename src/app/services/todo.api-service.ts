import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Todo {
  id: number | string;

  value: string;
}

@Injectable()
export class TodoApiService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://56e05c3213da80110013eba3.mockapi.io/api';
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
