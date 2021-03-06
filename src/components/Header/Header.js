import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { CurrencySwitch } from "../CurrencySwitch/CurrencySwitch";
import { navigation } from "../../config";

export const Header = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  return (
    <Navbar className="mb-3" color="primary" dark expand="md">
      <Container>
        <div className="header__nav-wrapper">
          <NavbarBrand tag={Link} to="/">
            Innoscripta
          </NavbarBrand>
          <CurrencySwitch />
        </div>
        <NavbarToggler onClick={setIsHeaderOpen.bind(null, !isHeaderOpen)} />
        <Collapse isOpen={isHeaderOpen} navbar>
          <Nav navbar className="header__nav">
            {navigation.map((navInfo) => (
              <NavItem key={navInfo.path}>
                <NavLink exact tag={Link} to={navInfo.path}>
                  {navInfo.title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
