import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardFooter,
  Button,
  CardSubtitle,
  Spinner,
} from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";

export const PizzaCard = ({
  id,
  img,
  title,
  description,
  addPizza,
  removePizza,
  price,
}) => {
  const count = useSelector(
    ({ cart }) => cart.list.find((cartItem) => cartItem.id === id)?.count || 0
  );

  return (
    <Card className="pizza-card">
      <CardImg
        tag={LazyLoadImage}
        className="pizza-card__img"
        top
        width="100%"
        src={img}
        alt={title}
      />
      <CardBody>
        <CardTitle className="font-weight-bold">{title}</CardTitle>
        <CardSubtitle className="text-muted">{price}</CardSubtitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <div className="pizza-card__actions">
          <Button
            onClick={removePizza.bind(null, id)}
            disabled={count === 0}
            color="primary"
          >
            -
          </Button>
          <div className="pizza-card__actions-count">
            <span>{count}</span>
          </div>
          <Button onClick={addPizza.bind(null, id)} color="primary">
            +
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
