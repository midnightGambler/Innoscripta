import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import { format } from "date-fns";

export const OrdersHistoryTable = () => {
  const orders = useSelector(({ orders }) => orders.list);

  const formatOrder = (orderList) =>
    orderList.map((order) => `${order.title} (${order.count})`).join(", ");

  return (
    <Table responsive bordered size="sm">
      <thead>
        <tr>
          <th>Date</th>
          <th>Order</th>
          <th>Adress</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((orderInfo) => (
          <tr key={orderInfo.createdAt}>
            <td>{format(orderInfo.createdAt, "dd.MM.yyyy")}</td>
            <td>{formatOrder(orderInfo.order)}</td>
            <td>{orderInfo.address}</td>
            <td>{orderInfo.details || "—"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
