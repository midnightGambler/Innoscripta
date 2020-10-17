import { CHANGE_CURRENCY } from "./types";

export const changeCurrency = (currency) => {
  localStorage.setItem("app", JSON.stringify({ currency }));
  return {
    type: CHANGE_CURRENCY,
    currency,
  };
  F;
};
