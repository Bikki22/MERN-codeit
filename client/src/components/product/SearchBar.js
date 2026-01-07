"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  const [productName, setProductName] = useState("");

  const router = useRouter();

  const searchParams = useSearchParams();

  function searchProduct() {
    const params = new URLSearchParams(searchParams.toString());
    params.set("name", productName);

    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex items-center justify-center">
      <form className="max-w-2xl mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center px-3 pointer-events-none">
            <FaMagnifyingGlass className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-lg p-4 pl-8 text-sm text-gray-900 border outline-gray-500 border-gray-200 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Search Mockups, Logos..."
            onChange={(e) => setProductName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                // Handle search submission
                searchProduct();
              }
            }}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700  cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              searchProduct();
            }}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
