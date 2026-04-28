"use client";

import { getOrderByUser } from "@/api/orders";
import OrderCard from "@/components/OrderCard";
import Spinner from "@/components/Spinner";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
} from "@/constants/orderStatus";
import { ORDERS_ROUTES } from "@/constants/routes";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const orderStatuses = [
  ORDER_STATUS_PENDING,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_DELIVERED,
];

const OrderPage = () => {
  const searchParams = useSearchParams();
  const statusParam = searchParams?.get("status") || ORDER_STATUS_PENDING;

  const router = useRouter();

  const [orders, serOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrderByUser(statusParam)
      .then((response) => serOrders(response.data))
      .finally(() => setLoading(false));
  }, [statusParam]);

  if (loading)
    return (
      <div className="flex justify-center py-20">
        <Spinner className="w-10 h-10" />
      </div>
    );

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
          History
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          My orders
        </h1>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-1.5 inline-flex mb-6 overflow-x-auto">
        {orderStatuses.map((orderStatus) => (
          <button
            key={orderStatus}
            className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-xl cursor-pointer transition whitespace-nowrap ${
              orderStatus == statusParam
                ? "bg-primary text-white shadow-sm shadow-primary/20"
                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
            onClick={() =>
              router.push(`${ORDERS_ROUTES}?status=${orderStatus}`)
            }
          >
            {orderStatus}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5">
        {orders.length == 0 ? (
          <div className="text-center py-20 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-1">
              No orders yet
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Once you place an order, it&apos;ll show up here.
            </p>
          </div>
        ) : (
          orders.map((order, index) => <OrderCard order={order} key={index} />)
        )}
      </div>
    </section>
  );
};

export default OrderPage;
