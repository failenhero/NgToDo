import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {TODO_REDUCER_NODE, todoReducer} from "./store/todo/todo.reducer";
import { TodoPageComponent } from './page/todo-page/todo-page.component';
import {RouterModule} from "@angular/router";
import {todoRoutes} from "./routes";
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';
import {MatIconModule} from "@angular/material/icon";
import {PipesModule} from "../../shared/pipes/pipes.module";


@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(todoRoutes),
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    PipesModule
  ]
})
export class TodoModule { }
