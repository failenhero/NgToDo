import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {TodoState} from "../../store/todo/todo.reducer";
import {
  TodoCreateAction,
  TodoDeleteAction,
  TodoMarkAsDoneAction,
  TodoMarkAsImportantAction
} from "../../store/todo/todo.actions";
import {Todo} from "../../models/todo.model";
import {todoListSelector} from "../../store/todo/todo.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent implements OnInit {
  todoList$: Observable<Todo[] | null> = this.store$.pipe(select(todoListSelector))

  constructor(
    private store$: Store<TodoState>
  ) { }

  ngOnInit(): void {
  }

  onCreate(name: string): void {
    this.store$.dispatch(new TodoCreateAction({name: name}));
  }

  onImportant(id: number): void {
    this.store$.dispatch(new TodoMarkAsImportantAction({id: id}))
  }

  onDone(id: number): void {
    this.store$.dispatch(new TodoMarkAsDoneAction({id: id}))
  }

  onDelete(id: number): void {
    this.store$.dispatch(new TodoDeleteAction({id: id}))
  }
}
