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
      className="flex items-center gap-2 mb-4 cursor-pointer text-gray-700 dark:text-gray-300"
      onClick={back}
    >
      <IoMdArrowRoundBack className="w-32 text-2xl" />
    </button>
  );
};

export default BackButton;
