import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { crear } from '../../store/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  public textInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.textInput = new FormControl('', [Validators.required, Validators.minLength(3)]);
  }

  ngOnInit(): void {
  }

  agregar(): void {
    if (this.textInput.invalid) { return; }

    this.store.dispatch( crear({text: this.textInput.value}) );

    this.textInput.reset();
  }
}
