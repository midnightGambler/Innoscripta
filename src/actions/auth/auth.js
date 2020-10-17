import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (payload) => {
  localStorage.setItem(
    "auth",
    JSON.stringify({ email: payload.email, isAuthtorized: true })
  );

  return {
    type: SIGN_IN,
    payload,
  };
};

export const signOut = () => {
  localStorage.setItem(
    "auth",
    JSON.stringify({ email: "", isAuthtorized: false })
  );
  return {
    type: SIGN_OUT,
  };
};
