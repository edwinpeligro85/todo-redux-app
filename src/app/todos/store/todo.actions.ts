import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crear todo',
    props<{ text: string; }>()
);

export const toggleTodo = createAction(
    '[TODO] Toggle completed todo',
    props<{ id: number; }>()
);

export const editar = createAction(
    '[TODO] Editar todo',
    props<{ id: number; text: string; }>()
);

export const eliminar = createAction(
    '[TODO] Eliminar todo',
    props<{ id: number; }>()
);

export const toggleAllTodo = createAction(
    '[TODO] Toggle completed all todos',
    props<{ completed: boolean; }>()
);

export const cleanComplited = createAction('[Filtro] Limpiar completadas');
