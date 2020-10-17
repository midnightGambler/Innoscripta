import React from "react";
import { ListGroup } from "reactstrap";
import { useDispatch } from "react-redux";
import {
  decreaseItemCount,
  increaseItemCount,
  removeItem,
} from "../../actions/cart/cart";
import { getCurrencySign } from "../../config";
import { CartListItem } from "./CartListItem";

export const CartList = ({ items, currency }) => {
  const dispatch = useDispatch();

  const getTotalPrice = (cartItem) => {
    const basePrice = cartItem.prices[currency];
    const totalPrice = basePrice * cartItem.count;
    return `${totalPrice.toFixed(2)}${getCurrencySign(currency)}`;
  };

  const handleRemoveCartItem = (id) => dispatch(removeItem(id));

  const addPizza = (id) => dispatch(increaseItemCount(id));
  const removePizza = (id) => dispatch(decreaseItemCount(id));

  return (
    <ListGroup className="cart-list">
      {items.map((cartItem) => (
        <CartListItem
          addPizza={addPizza}
          removePizza={removePizza}
          key={cartItem.id}
          {...cartItem}
          handleRemoveCartItem={handleRemoveCartItem}
          totalPrice={getTotalPrice(cartItem)}
        />
      ))}
    </ListGroup>
  );
};
