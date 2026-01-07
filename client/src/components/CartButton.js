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
      className="cursor-pointer relative px-1"
    >
      <div className="absolute -top-2 -right-2 text-white bg-red-500 text-[0.75rem] rounded-full h-4 w-4 flex justify-center items-center ">
        <span>{products.length}</span>
      </div>
      <MdOutlineAddShoppingCart />
    </button>
  );
};

export default CartButton;
