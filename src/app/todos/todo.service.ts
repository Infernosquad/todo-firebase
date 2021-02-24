import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Todo} from '../models/todo.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  constructor(private firestore: AngularFirestore) {}

  firestorePlacesCollection = this.firestore.collection('todos');

  todos$ = this.firestorePlacesCollection.snapshotChanges().pipe(
    map(actions => {
      return actions.map(p => {
        const todo = p.payload.doc;
        const id = todo.id;
        return { id, ...(todo.data() as {})} as Todo;
      });
    })
  );

  async createTodo(data: Todo): Promise<void> {
    try {
      await this.firestorePlacesCollection.add(Object.assign({}, data));
    } catch (err) {
      console.log(err);
    }
  }

  async toggleTodo(id: string, selected: boolean): Promise<void> {
    try {
      await this.firestorePlacesCollection
        .doc(id)
        .set({ selected: !selected }, { merge: true });
    } catch (err) {
      console.log(err);
    }
  }

  async deleteTodo(id: string): Promise<void> {
    try {
      await this.firestorePlacesCollection.doc(id).delete();
    } catch (err) {
      console.log(err);
    }
  }
}
