import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReverseTodoPipe } from './reverse-todo-pipe/reverseTodo.pipe';



@NgModule({
  declarations: [
    ReverseTodoPipe
  ],
  exports: [
    ReverseTodoPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
