import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Filtros } from '../../../filtro/fltro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: Filtros): Todo[] {
    switch (filtro) {
      case 'completados': return todos.filter( todo => todo.completed );
      case 'pedientes':   return todos.filter( todo => !todo.completed );
      default: return todos;
    }
  }

}
