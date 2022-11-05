import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../services/todo.api-service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}
  @Input() todo: Todo;
  ngOnInit() {}
}
