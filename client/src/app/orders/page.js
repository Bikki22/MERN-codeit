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
      <div className="flex justify-center py-10">
        <Spinner className="w-10 h-10 fill-secondary" />
      </div>
    );

  return (
    <section className="py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold mb-5 dark:text-white">
        Order Items
      </h1>
      <div className="grid grid-cols-4 my-4 border-b border-gray-300 dark:border-gray-700">
        {orderStatuses.map((orderStatus) => (
          <button
            key={orderStatus}
            className={
              orderStatus == statusParam
                ? "text-sm font-medium text-white bg-primary/90 py-2 rounded cursor-pointer dark:text-white"
                : " cursor-pointer dark:text-gray-300"
            }
            onClick={() =>
              router.push(`${ORDERS_ROUTES}?status=${orderStatus}`)
            }
          >
            {orderStatus}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 col-span-6 gap-6">
        {orders.length == 0 ? (
          <div className="text-center w-full h-screen py-20 ">
            <h1 className="text-3xl">No Order items</h1>
          </div>
        ) : (
          orders.map((order, index) => <OrderCard order={order} key={index} />)
        )}
      </div>
    </section>
  );
};

export default OrderPage;
