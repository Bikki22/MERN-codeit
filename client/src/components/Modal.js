"use client";

import { RxCross1 } from "react-icons/rx";

const Modal = ({
  label,
  icon,
  showModal,
  info,
  setShowModal,
  confirmAction,
}) => {
  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className={showModal ? "block" : "hidden"}>
      <div className="w-full h-svh flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-[#00000033] z-50">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 opacity-100 p-5">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl w-8 h-8 ms-auto inline-flex justify-center items-center font-bold dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={closeModal}
          >
            <RxCross1 />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            {icon}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {label}
            </h3>
            {info}
            {confirmAction}
            <button
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={closeModal}
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
