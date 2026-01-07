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
        className="bg-red-500 rounded-md shadow text-white px-4 py-2 hover:bg-red-600 cursor-pointer"
      >
        delete
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        label={`Are you sure you want to delete ${order._id} order?`}
        confirmAction={
          <button
            className="py-2.5 px-5 ms-3 text-sm font-medium bg-red-500 rounded-lg hover:bg-red-600 text-white dark:bg-gray-800"
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
