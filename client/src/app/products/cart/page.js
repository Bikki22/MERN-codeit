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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Cart
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Your cart
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            {products.length} {products.length === 1 ? "item" : "items"}
          </p>
        </div>
        {products.length > 0 && (
          <button
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl border border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20 cursor-pointer transition"
            onClick={() => dispatch(clearCart())}
          >
            Clear cart
          </button>
        )}
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900">
          <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2">
            Your cart is empty
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Browse our catalog to find something you love.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-primary-dark hover:shadow-md hover:shadow-primary/20 transition"
          >
            Browse products
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-slate-700 dark:text-slate-300">
                <thead className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Brand
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-4">
                      <FiSettings />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr
                      key={index}
                      className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
                      >
                        <Link
                          href={`/products/${product._id}`}
                          className="flex items-center gap-4 hover:text-primary transition"
                        >
                          <Image
                            src={product.imageUrls[0] ?? noImage}
                            width={48}
                            height={48}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-xl ring-1 ring-slate-200 dark:ring-slate-700"
                          />
                          {product.name}
                        </Link>
                      </th>
                      <td className="px-6 py-4">{product.brand}</td>
                      <td className="px-6 py-4">{product.category}</td>
                      <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">
                        Rs. {product.price}
                      </td>
                      <td className="px-6 py-4">
                        <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-full px-2 py-1">
                          <button
                            onClick={() => dispatch(decreaseQuantity(product))}
                            className="cursor-pointer text-slate-600 hover:text-primary dark:text-slate-300"
                            aria-label="decrease"
                          >
                            <FiMinusCircle className="text-lg" />
                          </button>
                          <span className="w-6 text-center font-medium text-slate-900 dark:text-white">
                            {product.quantity}
                          </span>
                          <button
                            onClick={() => dispatch(increaseQuantity(product))}
                            className="cursor-pointer text-slate-600 hover:text-primary dark:text-slate-300"
                            aria-label="increase"
                          >
                            <FiPlusCircle className="text-lg" />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <RemoveFromCart product={product} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center sm:justify-end gap-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <div className="text-right sm:mr-6">
              <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Subtotal
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                Rs. {totalPrice}
              </p>
            </div>
            <CheckoutButton products={products} totalPrice={totalPrice} />
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
