import cezarIMG from "./img/pizzas/cezar.jpeg";
import beef_cheeseIMG from "./img/pizzas/beef&cheese.jpg";
import beef_mushroomsIMG from "./img/pizzas/beef&mushrooms.jpeg";
import carbonaraIMG from "./img/pizzas/carbonara.jpeg";
import cheese_chickenIMG from "./img/pizzas/cheese-chicken.jpg";
import cheeseIMG from "./img/pizzas/cheese.jpg";
import hawaiiIMG from "./img/pizzas/hawaii.jpg";
import meatIMG from "./img/pizzas/meat.jpg";
import pepperoniIMG from "./img/pizzas/pepperoni.jpg";
import USDIcon from "./icons/USD.svg";
import EURIcon from "./icons/EUR.svg";

export const getCurrencySign = (currency) => {
  switch (currency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    default:
      return currency;
  }
};

export const deliveryCost = {
  USD: 6.47,
  EUR: 5.53,
};

export const currencies = [
  {
    title: "USD",
    icon: USDIcon,
    sign: "$",
  },
  {
    title: "EUR",
    icon: EURIcon,
    sign: "€",
  },
];

const prices = {
  USD: 11.99,
  EUR: 9.99,
};

export const pizzas = [
  {
    id: 0,
    title: "Cezar",
    description:
      "Fresh iceberg lettuce, chicken, cherry tomatoes, cheddar and parmesan cheese, mozzarella, cream sauce, caesar sauce",
    img: cezarIMG,
    prices,
  },
  {
    id: 1,
    title: "Beef & Cheese",
    description: "Ham, mozzarella oversized, alfredo sauce",
    img: beef_cheeseIMG,
    prices,
  },
  {
    id: 2,
    title: "Beef & Mushrooms",
    description:
      "Ham, mushrooms, increased portion of mozzarella, tomato sauce",
    img: beef_mushroomsIMG,
    prices,
  },
  {
    id: 3,
    title: "Carbonara",
    description:
      "Bacon, cheddar and parmesan cheese, mozzarella, cherry tomatoes, red onion, garlic, cream sauce, Italian herbs",
    img: carbonaraIMG,
    prices,
  },
  {
    id: 4,
    title: "Cheese Chicken",
    description: "Chicken, cheese sauce, mozzarella, tomatoes",
    img: cheese_chickenIMG,
    prices,
  },
  {
    id: 5,
    title: "Cheese",
    description: "Large portion of mozzarella, tomato sauce",
    img: cheeseIMG,
    prices,
  },
  {
    id: 6,
    title: "Hawaiian pizza",
    description: "Chicken, tomato sauce, mozzarella, pineapple",
    img: hawaiiIMG,
    prices,
  },
  {
    id: 7,
    title: "Meat pizza",
    description:
      "Chicken, ham, spicy pepperoni, tomato sauce, spicy chorizo, mozzarella",
    img: meatIMG,
    prices,
  },
  {
    id: 9,
    title: "Pepperoni",
    description: "Spicy pepperoni, large portion of mozzarella, tomato sauce",
    img: pepperoniIMG,
    prices,
  },
];

export const navigation = [
  {
    title: "Order",
    path: "/",
  },
  {
    title: "Cart",
    path: "/cart",
  },
  {
    title: "History",
    path: "/history",
  },
  {
    title: "Sign in",
    path: "/auth",
  },
];

export const ordersFixtures = [
  {
    createdAt: 1602943025628,
    order: [
      {
        title: "Cezar",
        count: 1,
      },
      {
        title: "Beef & Cheese ",
        count: 2,
      },
      {
        title: "Cheese Chicken",
        count: 4,
      },
    ],
    address: "Moscow, Ploshad Stroiteley 25",
    details: "Don't call",
  },
  {
    createdAt: 1600819200000,
    order: [
      {
        title: "Cezar",
        count: 1,
      },
      {
        title: "Carbonara",
        count: 2,
      },
    ],
    address: "Saint Petersburg, Nevskiy Prospect 10",
    details: "Call defore deliver",
  },
  {
    createdAt: 1592956800000,
    order: [
      { title: "Meat", count: 1 },
      { title: "Pepperoni", count: 4 },
    ],
    address: "Saint Petersburg, Kollontay 5/1",
    details: "",
  },
];
