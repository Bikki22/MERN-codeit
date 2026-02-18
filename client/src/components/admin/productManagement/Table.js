"use client";

import { ADD_PRODUCT, PRODUCT_MANAGEMENT_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCog, FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import imagePlaceholder from "@/assets/images/noImage.jpeg";
import DeleteButton from "./DeleteButton";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/api/products";
import { refreshList } from "@/redux/product/productSlice";
import { TbArrowsUpDown } from "react-icons/tb";
import { format } from "date-fns";
import Pagination from "./Pagination";

const columns = [
  {
    label: "S.N",
    key: "id",
    isSortable: false,
  },
  {
    label: "Products",
    key: "name",
    isSortable: true,
  },
  {
    label: "Brand",
    key: "brand",
    isSortable: true,
  },
  {
    label: "Category",
    key: "category",
    isSortable: true,
  },
  {
    label: "Price",
    key: "price",
    isSortable: true,
  },
  {
    label: "Stock",
    key: "stock",
    isSortable: true,
  },
  {
    label: "Created At",
    key: "createdAt",
    isSortable: true,
  },
];

const Table = () => {
  const [products, setProducts] = useState([]);

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(-1);

  const { refresh } = useSelector((state) => state.product);

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    let query = {};

    if (sortBy) query.sort = JSON.stringify({ [sortBy]: sortOrder });

    query.limit = 10;

    getProducts()
      .then((response) => setProducts(response.data))
      .finally(() => {
        dispatch(refreshList(false));
      });
  }, [refresh, dispatch, sortBy, sortOrder]);

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="flex-1 flex items-center space-x-2">
                <h5>
                  <span className="text-gray-500">All Products: </span>
                  <span className="dark:text-white">123456</span>
                </h5>
                <h5 className="text-gray-500 dark:text-gray-400 ml-1">
                  1-100 (436)
                </h5>
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
              <div className="flex-shrink-0 flex flex-col items-start md:flex-row md:items-center lg:justify-end space-y-3 md:space-y-0 md:space-x-3">
                <button
                  type="button"
                  className="flex-shrink-0 inline-flex items-center justify-center py-2 px-3 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 gap-3"
                >
                  <FaCog className="mr-2 w-6 h-4 text-lg" />
                  Table settings
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
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
                      placeholder="Search for products"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <Link
                  href={`${PRODUCT_MANAGEMENT_ROUTE}/${ADD_PRODUCT}`}
                  type="button"
                  id="createProductButton"
                  data-modal-toggle="createProductModal"
                  className="flex items-center justify-center bg-primary-700 hover:bg-primary-800  border-1 border-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-gray-700 dark:text-white hover:bg-gray-100"
                >
                  <FaPlus className="h-3.5 w-3.5 mr-1.5 -ml-1 font-semibold" />
                  Add product
                </Link>
                <button
                  id="filterDropdownButton"
                  data-dropdown-toggle="filterDropdown"
                  className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 gap-2"
                  type="button"
                >
                  <FaEdit />
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
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 cursor-pointer">
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
                  {products.map((product, index) => (
                    <tr
                      key={index}
                      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
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
                            src={product.imageUrls[0] ?? imagePlaceholder}
                            alt={product.name}
                            width={10}
                            height={10}
                            className="h-8 w-auto mr-3 object-cover"
                          />
                          {product.name}
                        </div>
                      </th>
                      <td className="px-4 py-3 text-center">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                          {product.brand}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                          Rs. {product.price}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                        <div className="flex items-center">
                          <div className="h-4 w-4 rounded-full inline-block mr-2 bg-red-700" />
                          {product.stock}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                          {format(product.createdAt, "dd MMM, yyyy")}
                        </span>
                      </td>

                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex items-center space-x-4 justify-center">
                          <Link
                            href={`${PRODUCT_MANAGEMENT_ROUTE}/edit/${product._id}`}
                            type="button"
                            className="py-2 px-3 flex items-center text-sm font-medium text-center bg-primary-700 rounded-lg hover:bg-gray-200 dark:bg-primary-600 dark:hover:bg-primary-700 border-1 border-gray-200 "
                          >
                            <FaEdit className="h-4 w-4 mr-2 -ml-0.5" />
                            Edit
                          </Link>
                          <DeleteButton id={product._id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination page={page} setPage={setPage} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Table;
