import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
} from "@/constants/orderStatus";
import Image from "next/image";
import React from "react";
import { FaImage } from "react-icons/fa";
import DeleteAction from "./order/DeleteAction";
import CashOnDelivery from "./order/CashOnDelivery";

const OrderStatusBadge = ({ status }) => {
  const base =
    "inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full ring-1 ring-inset";
  switch (status) {
    case ORDER_STATUS_CONFIRMED:
      return (
        <span
          className={`${base} bg-blue-50 text-blue-700 ring-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:ring-blue-800`}
        >
          {status}
        </span>
      );
    case ORDER_STATUS_CANCELLED:
      return (
        <span
          className={`${base} bg-red-50 text-red-700 ring-red-200 dark:bg-red-900/30 dark:text-red-300 dark:ring-red-800`}
        >
          {status}
        </span>
      );
    case ORDER_STATUS_DELIVERED:
      return (
        <span
          className={`${base} bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-800`}
        >
          {status}
        </span>
      );
    default:
      return (
        <span
          className={`${base} bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:ring-amber-800`}
        >
          {status}
        </span>
      );
  }
};

const OrderCard = ({ order }) => {
  return (
    <div className="w-full p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-5 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1">
            Order Number
          </p>
          <h3 className="font-semibold text-sm text-slate-900 dark:text-white font-mono">
            #{order._id}
          </h3>
        </div>
        <OrderStatusBadge status={order.status} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {order.items.map((item, index) => (
          <div
            key={index}
            className="border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 hover:border-primary/30 transition"
          >
            <div className="flex gap-4 items-center">
              {item.product?.imageUrls ? (
                <Image
                  src={item.product?.imageUrls[0]}
                  alt={item.product?.name}
                  width={100}
                  height={100}
                  className="object-cover w-16 h-16 rounded-xl ring-1 ring-slate-200 dark:ring-slate-700"
                />
              ) : (
                <div className="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                  <FaImage />
                </div>
              )}
              <div className="text-slate-700 dark:text-slate-200">
                <h3 className="font-medium text-sm">{item.product?.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Rs. {item.product?.price} × {item.quantity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center py-3 bg-slate-50 dark:bg-slate-800/60 px-5 rounded-xl mt-5">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Total
          </p>
          <p className="text-lg font-bold text-slate-900 dark:text-white">
            Rs. {order.totalPrice}
          </p>
        </div>
        {order.status == ORDER_STATUS_PENDING && (
          <div className="flex flex-wrap gap-2 justify-end">
            <DeleteAction order={order} />
            <CashOnDelivery order={order} />
            <button className="bg-primary rounded-xl text-white text-sm font-medium px-4 py-2 hover:bg-primary-dark hover:shadow-md hover:shadow-primary/20 cursor-pointer transition">
              Payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
