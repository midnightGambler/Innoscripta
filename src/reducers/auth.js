import { SIGN_IN, SIGN_OUT } from "../actions/auth/types";

const defaultState = JSON.parse(localStorage.getItem("auth")) || {
  isAuthtorized: false,
  email: "",
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        isAuthtorized: true,
        email: action.payload.email,
      };

    case SIGN_OUT:
      return {
        isAuthtorized: false,
        email: "",
      };

    default:
      return state;
  }
};
