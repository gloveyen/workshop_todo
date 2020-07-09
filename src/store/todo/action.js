// Constant
export const INIT = "INIT";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const DONE = "DONE";

//Actions Creator
export function initTodo(payload) {
  return {
    type: INIT,
    payload: payload,
  };
}

export function addItem(payload) {
  return {
    type: ADD,
    payload: payload,
  };
}
