import API from "goals-todos-api";

export const ADD_GOALS = "ADD_GOALS";
export const REMOVE_GOALS = "REMOVE_GOALS";

function addGoal(goal) {
  return {
    type: ADD_GOALS,
    goal
  };
}

function removeGoal(id) {
  return {
    type: REMOVE_GOALS,
    id
  };
}

export function handleAddGoal(name, cb) {
  return dispatch => {
    return API.saveGoal(name)
      .then(goal => {
        dispatch(addGoal(goal));
        cb();
      })
      .catch(() => {
        alert("error occured!");
      });
  };
}

export function handleDeleteGoal(goal) {
  return dispatch => {
    dispatch(removeGoal(goal.id));
    return API.deleteGoal(goal.id).catch(() => {
      dispatch(addGoal(goal));
      alert("An error occured. Try again!");
    });
  };
}
