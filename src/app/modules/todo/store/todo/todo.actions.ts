import {Action} from "@ngrx/store";

export type TodoActions = TodoCreateAction | TodoMarkAsImportantAction | TodoMarkAsDoneAction;

export enum todoActionsType {
  CREATE = '[TODO] create todo item',
  MARK_AS_IMPORTANT = '[TODO] mark todo item as important',
  MARK_AS_DONE = '[TODO] mark todo item as done'
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
