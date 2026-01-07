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
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="flex-1 flex items-center space-x-2">
                <h5>
                  <span className="text-gray-500">All Users: </span>
                  <span className="dark:text-white">{users?.length}</span>
                </h5>
              </div>
              <div className="flex-shrink-0 flex flex-col items-start md:flex-row md:items-center lg:justify-end space-y-3 md:space-y-0 md:space-x-3"></div>
            </div>
            <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
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
                      placeholder="Search for orders"
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <Link
                  href={`${PRODUCT_MANAGEMENT_ROUTE}/${ADD_PRODUCT}`}
                  type="button"
                  id="createProductButton"
                  data-modal-toggle="createProductModal"
                  className="flex items-center justify-center bg-primary-700 hover:bg-primary-800  border-1 border-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-gray-700 dark:text-white hover:bg-gray-100"
                >
                  <FaPlus className="h-3.5 w-3.5 mr-1.5 -ml-1 font-semibold" />
                  Add Orders
                </Link>
                <button
                  id="filterDropdownButton"
                  data-dropdown-toggle="filterDropdown"
                  className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 gap-2"
                  type="button"
                >
                  <FaEdit />
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
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 cursor-pointer">
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
                      className="busier-b hover:bg-gray-50 dark:hover:bg-gray-700 text-center"
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
                            className="px-1 mx-0.5 text-sm bg-primary/10 text-primary rounded border-primary/50"
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
