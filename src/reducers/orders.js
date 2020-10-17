import { PLACE_ORDER } from "../actions/orders/types";
import { ordersFixtures } from "../config";

const defaultState = {
  list: ordersFixtures,
};

export const ordersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      const { payload } = action;
      return { list: [...state.list, { ...payload, createdAt: Date.now() }] };

    default:
      return state;
  }
};
