import { ADD_TODO } from "../actions/todos.js";
import { ADD_GOALS } from "../actions/goals.js";

const checker = store => next => action => {
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope. That's a bad idea");
  }

  if (
    action.type === ADD_GOALS &&
    action.goal.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope. That's a bad idea");
  }

  return next(action);
};

export default checker;
