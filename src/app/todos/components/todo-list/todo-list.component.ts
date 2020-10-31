import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import { AppState } from '../../../app.state';
import { Filtros } from '../../../filtro/fltro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[];
  public filtro: Filtros;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( ({ todos, filtro }) => {
      this.todos = todos;
      this.filtro = filtro;
    });
  }

}
