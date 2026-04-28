"use client";

import React from "react";
import { TbBulbFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDarkMode } from "react-icons/md";
import { LIGHT_THEME } from "@/constants/theme";
import { toggleTheme } from "@/redux/userPrefrences/userPrefrencesSlice";

const ThemeButton = () => {
  const { theme } = useSelector((state) => state.userPrefrence);

  const dispatch = useDispatch();
  return (
    <button
      className="cursor-pointer inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition"
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle theme"
    >
      {theme == LIGHT_THEME ? (
        <MdOutlineDarkMode className="w-5 h-5" />
      ) : (
        <TbBulbFilled className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeButton;
