import { createReducer, on } from '@ngrx/store';
import { setFiltro, Filtros } from './fltro.actions';

export const initialState: Filtros = 'todos';

const _filtroReducer = createReducer(
    initialState,
    on( setFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
}
