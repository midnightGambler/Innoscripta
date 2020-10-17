import { GET_PIZZAS } from "../actions/pizzas/type";
import { pizzas } from "../config";

const defaultState = {
  list: [],
  count: 0,
};

export const pizzasReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PIZZAS: {
      return { list: pizzas, count: pizzas.length };
    }

    default:
      return state;
  }
};
