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
  let todoToMark: Todo;
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
      todoToMark = state.todoList.find((todo)=> todo.id === action.payload.id);
      if (!todoToMark) {
        return;
      }
      const newTodoToMarkImportant: Todo = {...todoToMark, important: !todoToMark.important}
      idx = state.todoList.indexOf(todoToMark);
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
      todoToMark = state.todoList.find((todo)=> todo.id === action.payload.id);
      if (!todoToMark) {
        return;
      }
      const newTodoToMarkDone: Todo = {...todoToMark, done: !todoToMark.done}
      idx = state.todoList.indexOf(todoToMark);
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
    default:
      return state
  }
}
