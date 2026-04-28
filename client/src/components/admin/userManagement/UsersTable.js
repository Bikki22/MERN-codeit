"use client";

import { ADD_PRODUCT, PRODUCT_MANAGEMENT_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCog, FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { format } from "date-fns";
import { getAllUsers } from "@/api/users";
import { toast } from "react-toastify";
import Action from "./Action";

const columns = [
  {
    label: "S.N",
    key: "id",
  },
  {
    label: "User Name",
    key: "userName",
  },
  {
    label: "Email",
    key: "email",
  },
  {
    label: "Phone",
    key: "phone",
  },
  {
    label: "Role",
    key: "role",
  },
  {
    label: "CreatedAt",
    key: "createdat",
  },
];

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        toast.error(error.response);
      });
  }, []);

  return (
    <div>
      <section className="antialiased">
        <div className="mx-auto max-w-screen-2xl">
          <div className="bg-white dark:bg-slate-900 relative shadow-sm border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-5">
              <div className="flex-1 flex items-center gap-3 text-sm">
                <span className="text-slate-500 dark:text-slate-400">
                  All users
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {users?.length}
                </span>
              </div>
              <div className="flex-shrink-0 flex items-center gap-2"></div>
            </div>
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 justify-between px-5 py-4 border-t border-slate-100 dark:border-slate-800">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
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
                      placeholder="Search users..."
                      className="block w-full pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
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
                <thead className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    {columns.map((column, index) => (
                      <th scope="col" className="p-4" key={index}>
                        <div className="flex items-center justify-center gap-2">
                          {column.label}
                        </div>
                      </th>
                    ))}
                    <th scope="col" className="p-4 flex justify-center">
                      <FaCog />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) => (
                    <tr
                      key={index}
                      className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition text-center"
                    >
                      <td className="px-4 py-2">
                        <div className="flex items-center">{index + 1}</div>
                      </td>
                      <td className="px-4 py-2 font-medium">{user.username}</td>
                      <td className="px-4 py-2">{user.email}</td>
                      <td className="px-4 py-2">{user.phone}</td>
                      <td className="px-4 py-2">
                        {user.roles?.map((role) => (
                          <span
                            key={role}
                            className="inline-block px-2 py-0.5 mx-0.5 text-[11px] font-semibold bg-primary/10 text-primary rounded-full"
                          >
                            {role}
                          </span>
                        ))}
                      </td>
                      <td className="px-4 py-2 font-medium whitespace-nowrap">
                        {format(new Date(user.createdAt), "dd-MMM-yyyy")}
                      </td>
                      <td className="px-4 py-2 font-medium whitespace-nowrap">
                        <Action id={user._id} userRoles={user.roles} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsersTable;
