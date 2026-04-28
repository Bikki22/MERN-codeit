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
    <form className="w-full sm:w-auto">
      <label htmlFor="default-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full sm:w-80 md:w-96">
        <div className="absolute inset-y-0 start-0 flex items-center pl-3.5 pointer-events-none">
          <FaMagnifyingGlass className="w-4 h-4 text-slate-400" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full pl-10 pr-24 py-2.5 text-sm text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
          placeholder="Search products..."
          onChange={(e) => setProductName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              searchProduct();
            }
          }}
        />
        <button
          type="submit"
          className="text-white absolute end-1.5 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-dark font-semibold rounded-lg text-xs px-3.5 py-1.5 cursor-pointer transition"
          onClick={(e) => {
            e.preventDefault();
            searchProduct();
          }}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
