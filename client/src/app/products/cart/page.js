"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMinusCircle, FiPlusCircle, FiSettings } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import noImage from "@/assets/images/noImage.jpeg";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/cart/cartSlice";
import RemoveFromCart from "@/components/product/RemoveFromCart";
import CheckoutButton from "@/components/product/CheckoutButton";

const CartPage = () => {
  const { products, totalPrice } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <section className="dark:bg-gray-700 dark:text-white">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="max-w-7xl mx-auto py-2 flex justify-between items-center">
          <h2 className="text-3xl font-medium">Your Cart</h2>
          <button
            className="border-2 px-3 py-1 rounded-md bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-all duration-300"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Brand
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  <FiSettings />
                </th>
              </tr>
            </thead>
            <tbody>
              {products.length == 0 ? (
                <tr className="w-full">
                  <th className="text-3xl ">Cart is Empty</th>
                </tr>
              ) : (
                products.map((product, index) => (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <Link
                        href={`/products/${product._id}`}
                        className="flex items-center gap-5"
                      >
                        <Image
                          src={product.imageUrls[0] ?? noImage}
                          width={30}
                          height={30}
                          alt={product.name}
                          className="w-10 h-10 object-cover"
                        />
                        {product.name}
                      </Link>
                    </th>
                    <td className="px-6 py-4">{product.brand}</td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">Rs. {product.price}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => dispatch(decreaseQuantity(product))}
                          className="cursor-pointer"
                        >
                          <FiMinusCircle className="text-lg" />
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(product))}
                          className="cursor-pointer"
                        >
                          <FiPlusCircle className="text-lg" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <RemoveFromCart product={product} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="max-w-7xl mx-auto flex items-center justify-end py-5">
          <CheckoutButton products={products} totalPrice={totalPrice} />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
