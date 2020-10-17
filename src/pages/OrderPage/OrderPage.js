import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { PizzaCard } from "../../components/PizzaCard/PizzaCard";
import { getPizzas } from "../../actions/pizzas/pizzas";
import { decreaseItemCount, increaseItemCount } from "../../actions/cart/cart";
import { getCurrencySign } from "../../config";

export const OrderPage = () => {
  const { pizzas, currency } = useSelector(({ pizzas, app }) => ({
    pizzas: pizzas.list,
    currency: app.currency,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzas());
  }, []);

  const addPizza = (id) => dispatch(increaseItemCount(id));
  const removePizza = (id) => dispatch(decreaseItemCount(id));

  const formatPrice = (price) => `${price}${getCurrencySign(currency)}`;

  return (
    <>
      <h3 className="mb-3">Choose your pizza</h3>
      <Row>
        {pizzas.map((pizza) => (
          <Col key={pizza.id} className="mb-3" xs="12" md="6" lg="4">
            <PizzaCard
              {...pizza}
              price={formatPrice(pizza.prices[currency])}
              addPizza={addPizza}
              removePizza={removePizza}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
