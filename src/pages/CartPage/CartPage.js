import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import { CartList } from "../../components/CartList/CartList";
import { OrderModal } from "../../components/OrderModal/OrderModal";
import { deliveryCost, getCurrencySign } from "../../config";

export const CartPage = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const toggleDeliveryModal = () => setIsOrderModalOpen(!isOrderModalOpen);

  const { items, currency } = useSelector(({ cart, app }) => ({
    items: cart.list,
    currency: app.currency,
  }));

  const calculateTotalPrice = () => {
    const delivery = items.length && deliveryCost[currency];

    const totalPrice =
      items.reduce((acc, cur) => {
        const basePrice = cur.prices[currency];

        return acc + cur.count * basePrice;
      }, 0) + delivery;

    return `${totalPrice.toFixed(2)}${getCurrencySign(currency)}`;
  };

  const getDeliveryCost = () => {
    const delivery = items.length && deliveryCost[currency];
    return `${delivery}${getCurrencySign(currency)}`;
  };

  return (
    <>
      <h3 className="mb-3">Cart</h3>
      <CartList items={items} currency={currency} />
      <Row className="cart-page__summary">
        {!!items.length && (
          <Col xs="12">
            <span className="cart-page__summary-delivery">
              Delivery: {getDeliveryCost()}
            </span>
          </Col>
        )}
        <Col xs="6" md="9">
          <h4 className="cart-page__summary-total">
            Total: {calculateTotalPrice()}
          </h4>
        </Col>
        <Col xs="6" md="3">
          <Button
            color="primary"
            block
            disabled={items.length === 0}
            onClick={toggleDeliveryModal}
          >
            Order
          </Button>
        </Col>
      </Row>
      <OrderModal
        order={items}
        toggle={toggleDeliveryModal}
        isOpen={isOrderModalOpen}
      />
    </>
  );
};
