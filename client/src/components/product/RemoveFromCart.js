"use client";

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Modal from "../Modal";
import { removeFromCart } from "@/redux/cart/cartSlice";
import { FiAlertCircle } from "react-icons/fi";

const RemoveFromCart = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  function removeProduct() {
    dispatch(removeFromCart(product));

    setShowModal(false);
  }

  return (
    <>
      <button
        className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <FaTrash />
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        label={`Are you sure you want to remove ${product.name} from cart ?`}
        confirmAction={
          <button
            className="py-2.5 px-5 ms-3 text-sm font-medium bg-red-500 rounded-lg hover:bg-red-600 text-white dark:bg-gray-800"
            onClick={removeProduct}
          >
            Yes, I&apos;m sure
          </button>
        }
        icon={<FiAlertCircle className="mx-auto mb-4 text-red-500 w-12 h-12" />}
      />
    </>
  );
};

export default RemoveFromCart;
