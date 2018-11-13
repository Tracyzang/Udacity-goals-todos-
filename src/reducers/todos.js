import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todos.js";
import { RECEIVE_DATA } from "../actions/shared";

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter(a => a.id !== action.id);
    case TOGGLE_TODO:
      return state.map(a =>
        a.id !== action.id ? a : Object.assign({}, a, { complete: !a.complete })
      );
    case RECEIVE_DATA:
      return action.todos;
    default:
      return state;
  }
}
