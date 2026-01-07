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
      className="w-full flex justify-center border-1 py-1 my-2 rounded-sm text-lg bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
      onClick={addProductToCart}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
