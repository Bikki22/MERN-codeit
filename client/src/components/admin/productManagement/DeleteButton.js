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
        className="inline-flex items-center gap-2 text-red-600 border border-red-200 hover:bg-red-50 hover:border-red-300 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20 font-medium rounded-xl text-xs px-3 py-2 cursor-pointer transition"
        onClick={() => setShowModal(true)}
      >
        <FaTrash className="h-3 w-3" />
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
            className="text-white bg-red-600 hover:bg-red-700 hover:shadow-md hover:shadow-red-500/20 font-semibold rounded-xl text-sm px-5 py-2.5 cursor-pointer transition"
          >
            Yes, I&apos;m sure
          </button>
        }
      />
    </>
  );
};

export default DeleteButton;
