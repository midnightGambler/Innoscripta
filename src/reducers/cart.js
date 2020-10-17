import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  REMOVE_ITEM,
  CLEAN_CART,
} from "../actions/cart/types";
import { pizzas } from "../config";

const defaultState = {
  list: JSON.parse(localStorage.getItem("cart")) || [],
};

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE_COUNT: {
      const { id } = action;
      const { list } = state;
      let newList;
      const isAlreadyInCart = list.some((cartItem) => cartItem.id === id);

      if (isAlreadyInCart) {
        newList = list.map((cartItem) => {
          if (cartItem.id !== id) return cartItem;

          const count = cartItem.count + 1;
          return { ...cartItem, count };
        });
      } else {
        const selectedItem = pizzas.find((pizza) => pizza.id === id);
        newList = [...list, { ...selectedItem, count: 1 }];
      }

      return { list: newList };
    }

    case DECREASE_COUNT: {
      const { id } = action;

      const newList = state.list
        .map((cartItem) => {
          if (cartItem.id !== id) return cartItem;

          const count = cartItem.count - 1;
          return { ...cartItem, count };
        })
        .filter((cartItem) => cartItem.count !== 0);

      return { list: newList };
    }

    case REMOVE_ITEM: {
      const { id } = action;

      const newList = state.list.filter((cartItem) => cartItem.id !== id);

      return { list: newList };
    }

    case CLEAN_CART: {
      return { list: [] };
    }

    default:
      return state;
  }
};
