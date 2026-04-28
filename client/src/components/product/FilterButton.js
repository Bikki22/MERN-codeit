"use client";

import React, { useState } from "react";
import { MdOutlineFilterAlt } from "react-icons/md";
import FilterDrawer from "./FilterDrawer";

const FilterButton = ({ brands, categories }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowFilter(!showFilter)}
        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 cursor-pointer transition"
      >
        <MdOutlineFilterAlt className="w-4 h-4" /> Filter
      </button>
      <FilterDrawer
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        brands={brands}
        categories={categories}
      />
    </div>
  );
};

export default FilterButton;
