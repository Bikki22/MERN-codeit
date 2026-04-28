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

const PAGE_LIMIT = 3;

const Table = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0); // FIX #8: track real total from API

  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(-1);

  const [searchQuery, setSearchQuery] = useState(""); // FIX #9: search state added

  const { refresh } = useSelector((state) => state.product);

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    let query = {};

    if (sortBy) query.sort = { [sortBy]: sortOrder };

    query.limit = PAGE_LIMIT;
    query.offset = PAGE_LIMIT * (page - 1);

    if (searchQuery) query.search = searchQuery; // FIX #9: pass search to API

    getProducts(query)
      .then((response) => {
        setProducts(response?.data?.products ?? []); // FIX #1: default to [] if undefined
        setTotalProducts(response?.data?.total ?? 0); // FIX #8: real total from API
      })
      .finally(() => {
        dispatch(refreshList(false));
      });
  }, [refresh, dispatch, sortBy, sortOrder, page, searchQuery]); // FIX #9: searchQuery in deps

  // FIX #6: removed console.log(products)

  const handleSort = (column) => {
    if (!column.isSortable) return; // FIX #4: skip non-sortable columns
    setSortBy(column.key);
    setSortOrder(sortOrder === 1 ? -1 : 1); // FIX #5: use === instead of ==
  };

  return (
    <div>
      <section className="antialiased">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
              Catalog
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Product management
            </h1>
          </div>
          <div className="bg-white dark:bg-slate-900 relative shadow-sm border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-5">
              <div className="flex-1 flex items-center gap-3 text-sm">
                <span className="text-slate-500 dark:text-slate-400">
                  All products
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {totalProducts}
                </span>
                <span className="text-slate-400 text-xs">
                  Showing {totalProducts === 0 ? 0 : PAGE_LIMIT * (page - 1) + 1}
                  –{Math.min(PAGE_LIMIT * page, totalProducts)}
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
                  Showing {PAGE_LIMIT * (page - 1) + 1}–
                  {Math.min(PAGE_LIMIT * page, totalProducts)} of{" "}
                  {totalProducts} results
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
                <form
                  className="flex items-center"
                  onSubmit={(e) => e.preventDefault()} // FIX #9: prevent default form submit
                >
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
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setPage(1);
                      }}
                      className="block w-full pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <Link
                  href={`${PRODUCT_MANAGEMENT_ROUTE}/${ADD_PRODUCT}`}
                  type="button"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold rounded-xl text-sm px-4 py-2.5 hover:bg-primary-dark hover:shadow-md hover:shadow-primary/20 transition"
                >
                  <FaPlus className="h-3 w-3" />
                  Add product
                </Link>
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
                    {columns.map(
                      (
                        column, // FIX #7: use column.key instead of index
                      ) => (
                        <th
                          scope="col"
                          className="p-4"
                          key={column.key}
                          onClick={() => handleSort(column)} // FIX #4: use handleSort with guard
                        >
                          <div className="flex items-center justify-center gap-2">
                            {column.label}
                            {column.isSortable ? <TbArrowsUpDown /> : null}
                          </div>
                        </th>
                      ),
                    )}
                    <th scope="col" className="p-4 flex justify-center">
                      <FaCog />
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {products.map(
                    (
                      product, // FIX #7: use product._id as key
                    ) => (
                      <tr
                        key={product._id}
                        className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition"
                      >
                        <td className="p-4 w-4">
                          {/* S.N is display only so index is fine here for numbering */}
                          <p>
                            {products.indexOf(product) +
                              1 +
                              PAGE_LIMIT * (page - 1)}
                          </p>
                        </td>
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div className="flex items-center mr-3">
                            <Image
                              src={product.imageUrls?.[0] ?? imagePlaceholder}
                              alt={product.name}
                              width={40}
                              height={40}
                              className="h-9 w-9 mr-3 object-cover rounded-lg ring-1 ring-slate-200 dark:ring-slate-700"
                            />
                            {product.name}
                          </div>
                        </th>
                        <td className="px-4 py-3 text-center">
                          <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                            {product.brand}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                            Rs. {product.price}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-medium text-slate-900 dark:text-white text-center">
                          <div className="inline-flex items-center gap-2">
                            <span
                              className={`h-2 w-2 rounded-full ${
                                product.stock > 10
                                  ? "bg-emerald-500"
                                  : product.stock > 0
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                              }`}
                            />
                            {product.stock}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                            {/* FIX #3: validate date before formatting */}
                            {product.createdAt
                              ? format(
                                  new Date(product.createdAt),
                                  "dd MMM, yyyy",
                                )
                              : "N/A"}
                          </span>
                        </td>

                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <div className="flex items-center space-x-4 justify-center">
                            <Link
                              href={`${PRODUCT_MANAGEMENT_ROUTE}/edit/${product._id}`}
                              type="button"
                              className="inline-flex items-center gap-2 py-2 px-3 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
                            >
                              <FaEdit className="h-3 w-3" />
                              Edit
                            </Link>
                            <DeleteButton id={product._id} />
                          </div>
                        </td>
                      </tr>
                    ),
                  )}
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
