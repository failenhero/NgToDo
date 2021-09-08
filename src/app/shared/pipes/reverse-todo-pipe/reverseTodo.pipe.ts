import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from "../../../modules/todo/models/todo.model";

@Pipe({
  name: 'reverseTodo'
})
export class ReverseTodoPipe implements PipeTransform {

  transform(value: Todo[] | null): Todo[] | null {
    if (!value) {
      return null;
    }
    return value.slice().reverse();
  }

}
