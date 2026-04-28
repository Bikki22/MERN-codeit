"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackButton = () => {
  const router = useRouter();

  function back() {
    router.back();
  }

  return (
    <button
      className="inline-flex items-center gap-2 mb-6 cursor-pointer text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
      onClick={back}
    >
      <IoMdArrowRoundBack className="text-lg" />
      Back
    </button>
  );
};

export default BackButton;
