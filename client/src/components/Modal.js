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
      <div className="w-full h-svh flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-slate-900/40 backdrop-blur-sm z-50 animate-fade-in">
        <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 max-w-md w-[92%] p-6">
          <button
            type="button"
            className="absolute top-3 end-3 text-slate-500 bg-transparent hover:bg-slate-100 hover:text-slate-900 rounded-full text-xl w-8 h-8 inline-flex justify-center items-center dark:hover:bg-slate-700 dark:hover:text-white transition cursor-pointer"
            onClick={closeModal}
          >
            <RxCross1 />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="pt-4 pb-1 text-center">
            {icon}
            <h3 className="mb-5 text-base md:text-lg font-medium text-slate-700 dark:text-slate-200">
              {label}
            </h3>
            {info}
            <div className="flex items-center justify-center gap-3 mt-2">
              {confirmAction}
              <button
                className="py-2.5 px-5 text-sm font-medium text-slate-700 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-700 cursor-pointer transition"
                onClick={closeModal}
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
