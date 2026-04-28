"use client";

import { ADD_PRODUCT, PRODUCT_MANAGEMENT_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCog, FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import imagePlaceholder from "@/assets/images/noImage.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { refreshList } from "@/redux/product/productSlice";
import { TbArrowsUpDown } from "react-icons/tb";
import { format } from "date-fns";
import DeleteButton from "../productManagement/DeleteButton";
import { getAllOrders } from "@/api/orders";

const columns = [
  {
    label: "S.N",
    key: "id",
    isSortable: false,
  },
  {
    label: "Order Number",
    key: "orderNumber",
    isSortable: true,
  },
  {
    label: "User",
    key: "user",
    isSortable: true,
  },
  {
    label: "Order Items",
    key: "orderItems",
    isSortable: true,
  },
  {
    label: "Total Price",
    key: "totalPrice",
    isSortable: true,
  },
  {
    label: "Status",
    key: "status",
    isSortable: true,
  },
  {
    label: "Created At",
    key: "createdAt",
    isSortable: true,
  },
];

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(-1);

  useEffect(() => {
    let query = {};

    getAllOrders({ query }).then((response) => setOrders(response.data));
  }, [sortOrder]);
  console.log(orders);
  return (
    <div>
      <section className="antialiased">
        <div className="mx-auto max-w-screen-2xl">
          <div className="bg-white dark:bg-slate-900 relative shadow-sm border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-5">
              <div className="flex-1 flex items-center gap-3 text-sm">
                <span className="text-slate-500 dark:text-slate-400">
                  All orders
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {orders.length}
                </span>
                <button
                  type="button"
                  className="group"
                  data-tooltip-target="results-tooltip"
                >
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">More info</span>
                </button>
                <div
                  id="results-tooltip"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Showing 1-100 of 436 results
                  <div className="tooltip-arrow" data-popper-arrow />
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 py-2 px-3 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition"
                >
                  <FaCog className="w-3.5 h-3.5" />
                  Table settings
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 justify-between px-5 py-4 border-t border-slate-100 dark:border-slate-800">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      placeholder="Search orders..."
                      className="block w-full pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition"
                  type="button"
                >
                  <FaEdit className="w-3.5 h-3.5" />
                  Filter options
                  <svg
                    className="-mr-1 ml-1.5 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-slate-700 dark:text-slate-300">
                <thead className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800/50 cursor-pointer">
                  <tr>
                    {columns.map((column, index) => (
                      <th
                        scope="col"
                        className="p-4"
                        key={index}
                        onClick={() => {
                          setSortBy(column.key);
                          setSortOrder(sortOrder == 1 ? -1 : 1);
                        }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          {column.label}
                          {column.isSortable ? <TbArrowsUpDown /> : null}
                        </div>
                      </th>
                    ))}
                    <th scope="col" className="p-4 flex justify-center">
                      <FaCog />
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order, index) => (
                    <tr
                      key={index}
                      className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition"
                    >
                      <td className="p-4 w-4">
                        <p>{index + 1}</p>
                      </td>
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="flex items-center mr-3">
                          <Image
                            src={order.imageUrls ?? imagePlaceholder}
                            alt={order.name}
                            width={10}
                            height={10}
                            className="h-8 w-auto mr-3 object-cover"
                          />
                          {order.name}
                          {console.log(order.name)}
                        </div>
                      </th>
                      <td className="px-4 py-3 text-center">
                        <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                          {order.brand}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                          {order.category}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                          Rs. {order.price}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                        <div className="flex items-center">
                          <div className="h-4 w-4 rounded-full inline-block mr-2 bg-red-700" />
                          {order.stock}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                          {format(order.createdAt, "dd MMM, yyyy")}
                        </span>
                      </td>

                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex items-center space-x-4 justify-center">
                          <DeleteButton id={order._id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>
                of
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrdersTable;
