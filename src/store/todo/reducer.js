import { ADD, DELETE, DONE, INIT } from "./action";

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, list: [action.payload, ...state.list] };

    case DELETE:
      const newList = [...state.list];
      newList.splice(action.payload, 1);
      return { ...state, list: [...newList] };

    case DONE:
      const item = state.list[action.payload];
      return { ...state, done: [item, ...state.done] };
    case INIT:
      return { list: [...action.payload], done: [] };

    default:
      return { ...state };
  }
};

export default todoReducer;
