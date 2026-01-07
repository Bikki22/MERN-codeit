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
  switch (status) {
    case ORDER_STATUS_CONFIRMED:
      return (
        <span className="bg-blue-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
          {status}
        </span>
      );
    case ORDER_STATUS_CANCELLED:
      return (
        <span className="bg-red-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">
          {status}
        </span>
      );
    case ORDER_STATUS_DELIVERED:
      return (
        <span className="bg-green-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-white">
          {status}
        </span>
      );
    default:
      return (
        <span className="bg-yellow-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-700 dark:text-white">
          {status}
        </span>
      );
  }
};

const OrderCard = ({ order }) => {
  return (
    <div className="w-7xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm ay-800 dark:border-gray-700 dark:hover:bg-gray-700 pb-3">
      <div className="flex justify-between items-center my-3">
        <h3 className="font-medium">Order Number: #{order._id}</h3>
        <OrderStatusBadge status={order.status} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {order.items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-md px-4 py-2"
          >
            <div className="flex gap-5">
              {item.product?.imageUrls ? (
                <Image
                  src={item.product?.imageUrls[0]}
                  alt={item.product?.name}
                  width={100}
                  height={100}
                  className="object-cover w-18 h-18 rounded border border-gray-100"
                />
              ) : (
                <FaImage />
              )}
              <div className="text-gray-600">
                <h3>{item.product?.name}</h3>
                <p>
                  Rs. {item.product?.price} x {item.quantity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center py-2 bg-gray-100 px-10 rounded my-2">
        <p className="font-medium">Rs.{order.totalPrice}</p>
        {order.status == ORDER_STATUS_PENDING && (
          <div className="flex gap-2">
            <DeleteAction order={order} />
            <CashOnDelivery order={order} />
            <button className="bg-primary rounded-md shadow text-white px-4 py-2 hover:bg-primary/90 cursor-pointer">
              payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
