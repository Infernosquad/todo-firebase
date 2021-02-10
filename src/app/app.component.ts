import {Component, OnInit} from '@angular/core';
import {TodoService} from './todos/todo.service';
import {Todo} from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  todos: Todo[];
  currentTodo: string;

  constructor(private service: TodoService) { }


  ngOnInit(): void {
    this.todos = this.service.getTodos();
  }

  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  addTodo(): void {
    const todo = new Todo();
    todo.text = this.currentTodo;
    this.todos.push(todo);
  }
}
