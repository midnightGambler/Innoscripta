import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { OrderForm } from "../OrderForm/OrderForm";

export const OrderModal = ({ isOpen, toggle, order }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader toggle={toggle}>Fill in delivery details</ModalHeader>
      <ModalBody>
        <OrderForm toggle={toggle} order={order} />
      </ModalBody>
    </Modal>
  );
};
