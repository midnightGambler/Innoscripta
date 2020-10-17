import React from "react";
import { OrdersHistoryTable } from "../../components/OrdersHistoryTable/OrdersHistoryTable";

export const OrdersPage = () => {
  return (
    <>
      <h3 className="mb-3">Orders history</h3>
      <OrdersHistoryTable />
    </>
  );
};
