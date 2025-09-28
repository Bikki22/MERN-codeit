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
      className="cursor-pointer px-4"
      onClick={() => dispatch(toggleTheme())}
    >
      {theme == LIGHT_THEME ? <MdOutlineDarkMode /> : <TbBulbFilled />}
    </button>
  );
};

export default ThemeButton;
