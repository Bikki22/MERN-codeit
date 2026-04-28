"use client";

import { getProductCount } from "@/api/products";
import { useEffect, useState } from "react";

const Pagination = ({ page, setPage }) => {
  const [pages, setPages] = useState([]);

  async function getCount() {
    const response = await getProductCount();

    const totalItems = response.data;
    console.log("total data:", totalItems);

    const totalPage = Math.ceil(totalItems / 3);
    const pageNumbers = [];

    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i.toString());
    }

    setPages(pageNumbers);
  }

  useEffect(() => {
    getCount();
  }, []);

  console.log(pages);

  return (
    <nav
      className="flex flex-col md:flex-row justify-end items-start md:items-center space-y-3 md:space-y-0 p-5 border-t border-slate-100 dark:border-slate-800"
      aria-label="Table navigation"
    >
      <ul className="inline-flex items-center gap-1">
        <li>
          <button
            className="flex items-center justify-center w-9 h-9 text-slate-500 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white cursor-pointer transition"
            onClick={() => setPage(page == pages ? 1 : pages)}
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
          </button>
        </li>

        {pages.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => setPage(Number(pageNumber))}
              className={`flex items-center justify-center w-9 h-9 text-sm font-medium rounded-lg border transition cursor-pointer ${
                Number(pageNumber) === page
                  ? "bg-primary text-white border-primary shadow-sm shadow-primary/20"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
              }`}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li>
          <button
            className="flex items-center justify-center w-9 h-9 text-slate-500 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white cursor-pointer transition"
            onClick={() => setPage(page > pages.length ? page : page + 1)}
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
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
