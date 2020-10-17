import { PLACE_ORDER } from "./types";

export const placeOrder = (payload) => ({
  type: PLACE_ORDER,
  payload,
});
