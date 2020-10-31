import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { toggleTodo, editar, eliminar } from '../../store/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @ViewChild('inputText') private inputText: ElementRef;
  @Input() public todo: Todo;

  public chkCompleted: FormControl;
  public textInput: FormControl;
  public editing = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, [Validators.required, Validators.minLength(3)]);
    this.chkCompleted.valueChanges.subscribe( () => {
      this.store.dispatch(toggleTodo({ id: this.todo.id }));
    });
  }

  editar(): void {
    this.editing = true;
    setTimeout( () => this.inputText.nativeElement.select() );
  }

  guardar(): void {
    this.editing = false;

    if (this.textInput.invalid) { return; }
    if (this.textInput.value === this.todo.text) { return; }

    this.store.dispatch(editar({ id: this.todo.id, text: this.textInput.value }));
  }

  eliminar(): void {
    this.store.dispatch(eliminar({ id: this.todo.id }));
  }
}
