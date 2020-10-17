import React from "react";
import {
  ListGroupItem,
  Badge,
  Button,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import CloseIcon from "../../icons/close.svg";

export const CartListItem = ({
  id,
  title,
  totalPrice,
  removePizza,
  addPizza,
  handleRemoveCartItem,
  count,
}) => (
  <ListGroupItem className="cart-list__item">
    <button
      className="icon-btn cart-list__close-btn"
      onClick={handleRemoveCartItem.bind(null, id)}
    >
      <CloseIcon fill="#ccc" width="16px" height="16px" />
    </button>
    <ListGroupItemHeading>
      {title}{" "}
      <Badge pill color="primary">
        {totalPrice}
      </Badge>
    </ListGroupItemHeading>
    <ListGroupItemText className="cart-list__item-actions">
      <Button onClick={removePizza.bind(null, id)} size="sm" color="primary">
        -
      </Button>
      <span className="cart-list__item-actions-count">{count}</span>
      <Button onClick={addPizza.bind(null, id)} size="sm" color="primary">
        +
      </Button>
    </ListGroupItemText>
  </ListGroupItem>
);
