import {Todo} from "../../models/todo.model";
import {TodoActions, todoActionsType} from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: Todo[];
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: []
}

export const todoReducer = (state = initialState, action: TodoActions) => {
  let idx: number;
  let todoToAct: Todo | undefined;
  let arrBeforeChangedTodo: Todo[];
  let arrAfterChangedTodo: Todo[];

  switch (action.type) {
    case todoActionsType.CREATE:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idIncrement,
            //@ts-ignore
            name: action.payload.name,
            important: false,
            done: false
          }
        ]
      };
    case todoActionsType.MARK_AS_IMPORTANT:
      //@ts-ignore
      todoToAct = state.todoList.find((todo)=> todo.id === action.payload.id);
      if (!todoToAct) {
        return;
      }
      const newTodoToMarkImportant: Todo = {...todoToAct, important: !todoToAct.important}
      idx = state.todoList.indexOf(todoToAct);
      arrBeforeChangedTodo = state.todoList.slice(0, idx);
      arrAfterChangedTodo = state.todoList.slice(idx+1, state.todoList.length);
      return {
        ...state,
        todoList: [
          ...arrBeforeChangedTodo,
          newTodoToMarkImportant,
          ...arrAfterChangedTodo
        ]
      }
    case todoActionsType.MARK_AS_DONE:
      //@ts-ignore
      todoToAct = state.todoList.find((todo)=> todo.id === action.payload.id);
      if (!todoToAct) {
        return;
      }
      const newTodoToMarkDone: Todo = {...todoToAct, done: !todoToAct.done}
      idx = state.todoList.indexOf(todoToAct);
      arrBeforeChangedTodo = state.todoList.slice(0, idx);
      arrAfterChangedTodo = state.todoList.slice(idx+1, state.todoList.length);
      return {
        ...state,
        todoList: [
          ...arrBeforeChangedTodo,
          newTodoToMarkDone,
          ...arrAfterChangedTodo
        ]
      }
    case todoActionsType.DELETE:
      //@ts-ignore
      todoToAct = state.todoList.find((todo)=> todo.id === action.payload.id);
      if (!todoToAct) {
        return;
      }
      idx = state.todoList.indexOf(todoToAct);
      arrBeforeChangedTodo = state.todoList.slice(0, idx);
      arrAfterChangedTodo = state.todoList.slice(idx+1, state.todoList.length);
      return {
        ...state,
        todoList: [
          ...arrBeforeChangedTodo,
          ...arrAfterChangedTodo
        ]
      }
    default:
      return state
  }
}
