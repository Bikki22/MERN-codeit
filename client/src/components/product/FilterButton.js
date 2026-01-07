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
        className="bg-secondary text-white px-4 py-2 rounded flex items-center gap-2 cursor-pointer hover:bg-secondary/90"
      >
        Filter <MdOutlineFilterAlt />
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
