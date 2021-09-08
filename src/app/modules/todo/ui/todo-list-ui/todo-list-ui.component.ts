import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../models/todo.model";

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.css']
})
export class TodoListUiComponent implements OnInit {
  @Input() todoList: Todo[] | null = [];
  @Output() delete = new EventEmitter<number>();
  @Output() important = new EventEmitter<number>();
  @Output() done = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onImportant(id: number): void {
    this.important.emit(id);
  }

  onDone(id: number): void {
    this.done.emit(id);
  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }
}
