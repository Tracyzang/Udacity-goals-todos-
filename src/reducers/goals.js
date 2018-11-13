import { ADD_GOALS, REMOVE_GOALS } from "../actions/goals";
import { RECEIVE_DATA } from "../actions/shared";

export default function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOALS:
      return state.concat([action.goal]);
    case REMOVE_GOALS:
      return state.filter(a => a.id !== action.id);
    case RECEIVE_DATA:
      return action.goals;
    default:
      return state;
  }
}
