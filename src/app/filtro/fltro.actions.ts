import { createAction, props } from '@ngrx/store';

export type Filtros = 'todos' | 'completados' | 'pedientes';

export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{ filtro: Filtros; }>()
);
