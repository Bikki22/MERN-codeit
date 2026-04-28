"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const CartButton = () => {
  const router = useRouter();

  const { products } = useSelector((state) => state.cart);

  return (
    <button
      onClick={() => router.push("/products/cart")}
      className="cursor-pointer relative inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition"
      aria-label="Cart"
    >
      {products.length > 0 && (
        <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-secondary rounded-full flex justify-center items-center ring-2 ring-white dark:ring-[#0b1020]">
          {products.length}
        </span>
      )}
      <MdOutlineAddShoppingCart className="w-5 h-5" />
    </button>
  );
};

export default CartButton;
