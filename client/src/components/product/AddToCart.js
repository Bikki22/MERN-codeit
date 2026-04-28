"use client";

import { addToCart } from "@/redux/cart/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();

  function addProductToCart() {
    delete product.description;

    dispatch(addToCart(product));
  }

  return (
    <button
      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-primary hover:shadow-md hover:shadow-primary/20 cursor-pointer transition-all"
      onClick={addProductToCart}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
