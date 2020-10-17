import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../../actions/app/app";
import { currencies } from "../../config";

export const CurrencySwitch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedCurrency = useSelector(({ app }) => app.currency);
  const dispatch = useDispatch();

  const toggle = () => setIsOpen(!isOpen);

  const handleChangeCurrency = (selectedCur) =>
    dispatch(changeCurrency(selectedCur));

  const renderCurrencies = () =>
    currencies.map(({ title, sign, icon: Icon }) => (
      <DropdownItem
        key={title}
        className="currency-switch__menu-item"
        onClick={handleChangeCurrency.bind(null, title)}
      >
        <Icon width="16px" height="16px" />
      </DropdownItem>
    ));

  const CurrencyIcon = currencies.find(
    (currency) => currency.title === selectedCurrency
  ).icon;

  return (
    <Dropdown
      className="currency-switch"
      inNavbar
      isOpen={isOpen}
      toggle={toggle}
    >
      <DropdownToggle className="currency-switch__toggler" color="primary">
        <CurrencyIcon fill="#fff" width="16px" height="16px" />
      </DropdownToggle>
      <DropdownMenu className="currency-switch__menu">
        {renderCurrencies()}
      </DropdownMenu>
    </Dropdown>
  );
};
