import { CHANGE_CURRENCY } from "../actions/app/types";

const defaultState = JSON.parse(localStorage.getItem("app")) || {
  currency: "USD",
};

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY:
      const { currency } = action;
      return { currency };

    default:
      return state;
  }
};
