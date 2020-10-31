import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Filtros, setFiltro } from '../../../filtro/fltro.actions';
import { cleanComplited } from '../../store/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public filtroActual: Filtros = 'todos';
  public filtros: Filtros[] = ['todos', 'pedientes', 'completados'];
  public pendientes = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes   = state.todos.filter( todo => !todo.completed ).length;
    });
  }

  cambiarFiltro(filtro: Filtros): void {
    this.store.dispatch(setFiltro({ filtro }));
  }

  limpiarCompletadas(): void {
    this.store.dispatch(cleanComplited());
  }
}
