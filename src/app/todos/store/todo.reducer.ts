import { createReducer, on } from '@ngrx/store';
import { crear, editar, toggleTodo, eliminar, toggleAllTodo, cleanComplited } from './todo.actions';
import { Todo } from '../models/todo.model';

export const initialState: Todo[] = [
    new Todo('Curso de Angular Avanzado'),
    new Todo('Curso de Redux con ngrx'),
    new Todo('Firebase con Angular'),
    new Todo('.NET CORE empresarial')
];

const _todoReducer = createReducer(
    initialState,
    on(crear,      (state, { text })     => [...state, new Todo(text)]),
    on(toggleTodo, (state, { id })       => state.map( todo => (todo.id === id) ? { ...todo, completed: !todo.completed } : todo)),
    on(editar,     (state, { id, text }) => state.map( todo => (todo.id === id) ? { ...todo, text } : todo )),
    on(eliminar,   (state, { id })       => state.filter( todo => (todo.id !== id ))),
    on(toggleAllTodo, (state, { completed }) => state.map( todo => ({ ...todo, completed }) )),
    on(cleanComplited, state => state.filter( todo => !todo.completed ))
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}
