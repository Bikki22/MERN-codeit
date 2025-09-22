import React from "react";
import { FaRegStar } from "react-icons/fa";

const Skeleton = () => {
  return (
    <div className="flex justify-center items-center text-cyan-600">
      <div className="w-full h-full dark:shadow px-5 py-3 shadow-xl rounded-md grid grid-rows-[auto_1fr_auto] border-2 border-gray-300">
        <div className="w-full flex justify-center my-">
          <div className="w-full h-40 bg-slate-200 rounded-md"></div>
        </div>
        <div className="px-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-10 rounded-sm dark:bg-blue-900 dark:text-blue-300"></span>
          <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-10 rounded-sm dark:bg-gray-700 dark:text-gray-300"></span>
          <h1 className="text-lg font-medium px-2 py-3 bg-primary my-3 rounded-md bg-slate-300"></h1>
          <p className="text-md font-semibold px-1 py-2 bg-primary rounded-md w-20 bg-slate-300"></p>
          <p className="opacity-10 flex my-2">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </p>
        </div>
        <div>
          <button className="w-full flex justify-center border-1 py-5 my-2 rounded-sm text-lg bg-gray-800 text-white hover:bg-gray-700 "></button>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
