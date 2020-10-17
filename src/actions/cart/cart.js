import {
  DECREASE_COUNT,
  INCREASE_COUNT,
  REMOVE_ITEM,
  CLEAN_CART,
} from "./types";
import { pizzas } from "../../config";

export const increaseItemCount = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let newCart;

  const isAlreadyInCart = cart.some((cartItem) => cartItem.id === id);

  if (isAlreadyInCart) {
    newCart = cart.map((cartItem) => {
      if (cartItem.id !== id) return cartItem;
      return { ...cartItem, count: cartItem.count + 1 };
    });
  } else {
    const selectedItem = pizzas.find((pizza) => pizza.id === id);
    newCart = [...cart, { ...selectedItem, count: 1 }];
  }

  localStorage.setItem("cart", JSON.stringify(newCart));

  return {
    type: INCREASE_COUNT,
    id,
  };
};

export const decreaseItemCount = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const newCart = cart
    .map((cartItem) => {
      if (cartItem.id !== id) return cartItem;

      const count = cartItem.count - 1;
      return { ...cartItem, count };
    })
    .filter((cartItem) => cartItem.count !== 0);

  localStorage.setItem("cart", JSON.stringify(newCart));

  return {
    type: DECREASE_COUNT,
    id,
  };
};

export const removeItem = (id) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const newCart = cart.filter((cartItem) => cartItem.id !== id);

  localStorage.setItem("cart", JSON.stringify(newCart));

  return {
    type: REMOVE_ITEM,
    id,
  };
};

export const cleanCart = () => {
  localStorage.setItem("cart", JSON.stringify([]));

  return {
    type: CLEAN_CART,
  };
};
