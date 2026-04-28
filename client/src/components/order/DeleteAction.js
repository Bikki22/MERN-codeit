"use client";

import { useState } from "react";
import Modal from "../Modal";
import { FiAlertCircle } from "react-icons/fi";
import { deleteOrder } from "@/api/orders";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const DeleteAction = ({ order }) => {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  function removeOrder() {
    deleteOrder(order._id)
      .then(() => {
        toast.success("Order Deleted Successfully", {
          autoClose: 1500,
        });
        router.refresh();
      })
      .catch((error) => {
        toast.error(error.message, {
          autoClose: 1500,
        });
      })
      .finally(() => {
        setShowModal(false);
      });
    setShowModal(false);
  }
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="inline-flex items-center bg-white border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 dark:bg-slate-800 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20 rounded-xl text-sm font-medium px-4 py-2 cursor-pointer transition"
      >
        Delete
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        label={`Are you sure you want to delete this order?`}
        confirmAction={
          <button
            className="py-2.5 px-5 text-sm font-medium bg-red-600 rounded-xl hover:bg-red-700 hover:shadow-md hover:shadow-red-500/20 text-white cursor-pointer transition"
            onClick={removeOrder}
          >
            Yes, I&apos;m sure
          </button>
        }
        icon={<FiAlertCircle className="mx-auto mb-4 text-red-500 w-12 h-12" />}
      />
    </>
  );
};

export default DeleteAction;
