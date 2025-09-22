import Image from "next/image";
import React from "react";
import Link from "next/link";
import noImage from "@/assets/images/noImage.jpeg";
import { FaRegStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full h-full dark:shadow px-3 py-3 shadow-xl rounded-md grid grid-rows-[auto_1fr_auto] border-2 border-gray-300">
      <Link href={`/products/${product._id}`}>
        <div className="w-full flex justify-center overflow-hidden border-1 border-gray-500 rounded-md">
          <Image
            src={product.imageUrls[0] ?? noImage}
            width={500}
            height={500}
            alt={product.name}
            className="w-full max-h-40 py-3 object-contain hover:scale-125 transition-all duration-100 "
          />
        </div>
      </Link>
      <div className="px-5">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
          {product.brand}
        </span>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
          {product.category}
        </span>
        <Link href={`/products/${product._id}`}>
          <h1 className="text-xl font-bold px-2 py-1 ">{product.name}</h1>
        </Link>
        <div>
          <span className="text-primary font-bold mr-1 text-lg">
            Rs.{product.price}
          </span>
          <span className="line-through font-bold mr-1 text-lg px-2">
            Rs.{product.price * 1.2}
          </span>
        </div>
        <div className="text-yellow-500 text-md py-2 flex items-center  gap-0.5">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
      </div>
      <div>
        <button className="w-full flex justify-center border-1 py-1 my-2 rounded-sm text-lg bg-gray-800 text-white hover:bg-gray-700 cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
