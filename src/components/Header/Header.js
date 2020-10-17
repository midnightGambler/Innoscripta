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
        <NavbarBrand tag={Link} to="/">
          Innoscripta
        </NavbarBrand>
        <div className="header__nav-wrapper">
          <CurrencySwitch />
          <NavbarToggler onClick={setIsHeaderOpen.bind(null, !isHeaderOpen)} />
          <Collapse isOpen={isHeaderOpen} navbar>
            <Nav navbar>
              {navigation.map((navInfo) => (
                <NavItem key={navInfo.path}>
                  <NavLink exact tag={Link} to={navInfo.path}>
                    {navInfo.title}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </div>
      </Container>
    </Navbar>
  );
};
