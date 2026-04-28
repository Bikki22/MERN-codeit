"use client";

import OrdersTable from "@/components/admin/orderManagement/OrderTable";
import React from "react";

const OrderManagement = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl mb-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
          Sales
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Order management
        </h2>
      </div>
      <OrdersTable />
    </section>
  );
};

export default OrderManagement;
