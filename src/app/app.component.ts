import {Component, OnInit} from '@angular/core';
import {TodoService} from './todos/todo.service';
import {Todo} from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  currentTodo: string;
  todos$ = this.todoService.todos$;
  constructor(private todoService: TodoService) {
  }
  ngOnInit(): void {}

  addTodo(): void {
    const todo = new Todo();
    todo.text = this.currentTodo;
    this.todoService.createTodo(todo);
  }

  toggleTodo(id: string, selected: boolean): void {
    this.todoService.toggleTodo(id, selected);
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id);
  }
}
