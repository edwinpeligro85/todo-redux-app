import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/store/todo.reducer';
import { Filtros } from './filtro/fltro.actions';
import { filtroReducer } from './filtro/filtro.reducer';

export interface AppState {
    todos: Todo[];
    filtro: Filtros;
}

export const AppReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}
