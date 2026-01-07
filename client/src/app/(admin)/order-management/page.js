"use client";

import OrdersTable from "@/components/admin/orderManagement/OrderTable";
import React from "react";

const OrderManagement = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-4 sm:py-8">
      <div className="px-4 mx-auto max-w-screen-2xl">
        <h2>Order Management</h2>
      </div>
      <OrdersTable />
    </section>
  );
};

export default OrderManagement;
