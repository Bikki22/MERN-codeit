import Image from "next/image";
import React from "react";
import Link from "next/link";
import noImage from "@/assets/images/noImage.jpeg";
import { FaRegStar } from "react-icons/fa";
import AddToCart from "./AddToCart";

const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
      <Link href={`/products/${product._id}`} className="block">
        <div className="relative bg-slate-50 dark:bg-slate-800 aspect-square overflow-hidden">
          <Image
            src={product.imageUrls[0] ?? noImage}
            width={500}
            height={500}
            alt={product.name}
            className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
            priority
          />
        </div>
      </Link>
      <div className="flex-1 flex flex-col px-5 py-4 gap-2">
        <div className="flex flex-wrap gap-1.5">
          <Link
            href={`?brand=${product.brand}`}
            className="bg-primary/10 text-primary text-[11px] font-semibold px-2 py-0.5 rounded-full hover:bg-primary/20 transition"
          >
            {product.brand}
          </Link>
          <Link
            href={`?category=${product.category}`}
            className="bg-slate-100 text-slate-700 text-[11px] font-semibold px-2 py-0.5 rounded-full dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            {product.category}
          </Link>
        </div>
        <Link href={`/products/${product._id}`}>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white truncate group-hover:text-primary transition">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            Rs.{product.price}
          </span>
          <span className="line-through text-sm text-slate-400">
            Rs.{Math.round(product.price * 1.2)}
          </span>
          <span className="ml-auto text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full ring-1 ring-inset ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-800">
            -20%
          </span>
        </div>
        <div className="text-amber-400 text-xs flex items-center gap-0.5">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <span className="text-slate-400 ml-1.5">(0)</span>
        </div>
      </div>
      <div className="px-5 pb-5">
        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
