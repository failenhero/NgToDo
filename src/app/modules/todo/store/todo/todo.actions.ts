import {Action} from "@ngrx/store";

export type TodoActions = TodoCreateAction | TodoMarkAsImportantAction | TodoMarkAsDoneAction | TodoDeleteAction;

export enum todoActionsType {
  CREATE = '[TODO] create todo item',
  MARK_AS_IMPORTANT = '[TODO] mark todo item as important',
  MARK_AS_DONE = '[TODO] mark todo item as done',
  DELETE = '[TODO] delete todo item'
}

export class TodoCreateAction implements Action {
  readonly type: string = todoActionsType.CREATE;

  constructor(
    public payload: {name: string}
  ) {}
}

export class TodoMarkAsImportantAction implements Action {
  readonly type: string = todoActionsType.MARK_AS_IMPORTANT;

  constructor(
    public payload: {id: number}
  ) {}
}

export class TodoMarkAsDoneAction implements Action {
  readonly type: string = todoActionsType.MARK_AS_DONE;

  constructor(
    public payload: {id: number}
  ) {}
}

export class TodoDeleteAction implements Action {
  readonly type: string = todoActionsType.DELETE

  constructor(
    public payload: {id: number}
  ) {
  }
}
