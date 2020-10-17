import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { store } from "../../store";
import { Header } from "../Header/Header";

// pages
import { AuthPage } from "../../pages/AuthPage/AuthPage";
import { CartPage } from "../../pages/CartPage/CartPage";
import { OrderPage } from "../../pages/OrderPage/OrderPage";
import { OrdersPage } from "../../pages/OrdersPage/OrdersPage";

export const App = () => (
  <Provider store={store}>
    <Router basename="/">
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={OrderPage} />
          <Route path="/history" exact component={OrdersPage} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/auth" exact component={AuthPage} />
        </Switch>
      </Container>
    </Router>
  </Provider>
);
