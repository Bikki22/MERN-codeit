"use client";

import { deleteProduct } from "@/api/products";
import Modal from "@/components/Modal";
import { refreshList } from "@/redux/product/productSlice";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const DeleteButton = ({ id }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  function confirmDelete() {
    deleteProduct(id)
      .then(() => {
        dispatch(refreshList());
        toast.success("product deleted successfully", {
          autoClose: 1500,
        });
      })
      .catch((error) =>
        toast.error(error.message, {
          autoClose: 1500,
        })
      )
      .finally(() => setShowModal(false));
  }

  return (
    <>
      <button
        type="button"
        className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <FaTrash className="h-4 w-4 mr-2 -ml-0.5" />
        Delete
      </button>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        icon={<FiAlertCircle className="mx-auto mb-4 text-red-500 w-12 h-12" />}
        label="Are you sure you want to delete this product"
        confirmAction={
          <button
            onClick={confirmDelete}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 cursor-pointer "
          >
            Yes I&appos;m sure
          </button>
        }
      />
    </>
  );
};

export default DeleteButton;
