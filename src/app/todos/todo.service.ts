import { Injectable } from '@angular/core';
import {Todo} from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Todo[] {
    return [];
  }
}
