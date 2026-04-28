"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const DEFAULT_LIMIT = 10;
const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000000000000;
const DEFAULT_SORT = JSON.stringify({ createdAt: -1 });
const DEFAULT_BRANDS_FILTER = [];
const DEFAULT_CATEGORY_FILTER = "";

const FilterDrawer = ({ showFilter, setShowFilter, brands, categories }) => {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [sort, setSort] = useState(DEFAULT_SORT);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);

  const [brandsFilter, setBrandsFilter] = useState(DEFAULT_BRANDS_FILTER);
  const [categoriesFilter, setCategoriesFilter] = useState(
    DEFAULT_CATEGORY_FILTER
  );

  const router = useRouter();

  const searchParams = useSearchParams();

  function setFilter() {
    const params = new URLSearchParams(searchParams.toString());

    params.set("limit", limit);
    params.set("sort", sort);
    params.set("min", minPrice < 0 ? 0 : minPrice);
    params.set("max", maxPrice);
    params.set("brands", brandsFilter.join(","));
    params.set("category", categoriesFilter);

    router.push(`?${params.toString()}`);

    setShowFilter(false);
  }

  function handleBrandsFilterChange(brand) {
    setBrandsFilter((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  }

  function resetFilter() {
    setLimit(DEFAULT_LIMIT);
    setSort(DEFAULT_SORT);
    setMinPrice(DEFAULT_MIN_PRICE);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setBrandsFilter(DEFAULT_BRANDS_FILTER);
    setCategoriesFilter(DEFAULT_CATEGORY_FILTER);
  }

  const selectClass =
    "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-xl focus:ring-2 focus:ring-primary/40 focus:border-primary block w-full p-2.5 transition outline-none";
  const inputClass = selectClass;
  const sectionLabel =
    "block mb-2 text-[11px] font-semibold tracking-widest text-slate-500 uppercase dark:text-slate-400";

  return (
    <div className={showFilter ? "block" : "hidden"}>
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 animate-fade-in"
        onClick={() => setShowFilter(false)}
      ></div>
      <div className="overflow-y-auto fixed top-0 left-0 bottom-0 z-50 h-full bg-white dark:bg-slate-900 px-6 pt-6 pb-14 w-80 shadow-2xl border-r border-slate-200 dark:border-slate-800 animate-fade-in">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Filters
          </h4>
          <button
            onClick={() => setShowFilter(false)}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-lg cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
          Refine your results
        </p>

        <div className="py-3">
          <label htmlFor="limit" className={sectionLabel}>
            Limit
          </label>
          <select
            id="limit"
            className={selectClass}
            onChange={(e) => setLimit(e.target.value)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        <div className="py-3">
          <label htmlFor="orderBy" className={sectionLabel}>
            Order By
          </label>
          <select
            id="orderBy"
            className={selectClass}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
            <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
            <option value={JSON.stringify({ price: 1 })}>
              Price: Low to High
            </option>
            <option value={JSON.stringify({ price: -1 })}>
              Price: High to Low
            </option>
            <option value={JSON.stringify({ name: 1 })}>Name: A - Z</option>
            <option value={JSON.stringify({ name: -1 })}>Name: Z - A</option>
          </select>
        </div>

        <div className="py-3">
          <label className={sectionLabel}>Price Range</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              id="min"
              className={inputClass}
              placeholder="Min"
              onChange={(e) => setMinPrice(e.target.value)}
              min={0}
            />
            <input
              type="number"
              id="max"
              className={inputClass}
              placeholder="Max"
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="py-3">
          <label htmlFor="category" className={sectionLabel}>
            Category
          </label>
          <select
            id="category"
            className={selectClass}
            onChange={(e) => setCategoriesFilter(e.target.value)}
          >
            <option value="">All categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="py-3">
          <label htmlFor="brands" className={sectionLabel}>
            Brands
          </label>
          <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
            {brands.map((brand, index) => (
              <label
                key={index}
                htmlFor={brand}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition"
              >
                <input
                  id={brand}
                  type="checkbox"
                  className="w-4 h-4 accent-primary cursor-pointer"
                  onChange={() => handleBrandsFilterChange(brand)}
                />
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
          <button
            type="button"
            className="w-full text-white bg-primary hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 font-semibold rounded-xl text-sm px-5 py-2.5 cursor-pointer transition"
            onClick={() => setFilter()}
          >
            Apply filters
          </button>
          <button
            type="button"
            className="w-full text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium rounded-xl text-sm px-5 py-2.5 cursor-pointer transition"
            onClick={resetFilter}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;
