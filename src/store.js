import { createStore, combineReducers, compose } from "redux";
import { authReducer } from "./reducers/auth";
import { pizzasReducer } from "./reducers/pizzas";
import { appReducer } from "./reducers/app";
import { cartReducer } from "./reducers/cart";
import { ordersReducer } from "./reducers/orders";

const reducers = combineReducers({
  auth: authReducer,
  pizzas: pizzasReducer,
  app: appReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers());
