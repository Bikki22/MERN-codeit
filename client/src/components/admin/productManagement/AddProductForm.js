"use client";

import { createProduct, updateProduct } from "@/api/products";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProductForm = ({ product, isEditing = false }) => {
  const [loading, setLoading] = useState(false);
  const [productImages, setProductImages] = useState([]);
  const [localImageUrls, setLocalImageUrls] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    values: product,
  });

  function prepareData(data) {
    const formdata = new FormData();

    formdata.append("name", data.name);
    formdata.append("brand", data.brand);
    formdata.append("price", data.price);
    formdata.append("category", data.category);
    formdata.append("stock", data.stock);

    if (data.description) formdata.append("description", data.description);

    if (productImages.length > 0) {
      productImages.map((image) => formdata.append("images", image));
    }
    console.log(productImages);

    return formdata;
  }

  async function submitForm(data) {
    setLoading(true);

    const input = prepareData(data);

    try {
      if (isEditing) {
        await updateProduct(product._id, input);

        toast.success("Product updated successfully", {
          autoClose: 1500,
        });

        return;
      }

      await createProduct(input);
      reset();

      toast.success("Product created successfully", {
        autoClose: 1500,
      });
    } catch (error) {
      toast.error(error.message, {
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
      setLocalImageUrls([]);
      setProductImages([]);
    }
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="name"
            className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            placeholder="Type product name"
            {...register("name", { required: "Product name is required" })}
          />
          <p className="text-red-500 text-sm m-2">{errors.name?.message}</p>
        </div>
        <div className="w-full">
          <label
            htmlFor="brand"
            className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Brand
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            placeholder="Product brand"
            {...register("brand", { required: "Brand is required" })}
          />
          <p className="text-red-500 text-sm m-2">{errors.brand?.message}</p>
        </div>
        <div className="w-full">
          <label
            htmlFor="price"
            className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            placeholder="Rs. 2999"
            {...register("price", {
              required: "Product price is required",
            })}
          />
          <p className="text-red-500 text-sm m-2">{errors.price?.message}</p>
        </div>
        <div>
          <label
            htmlFor="category"
            className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            placeholder="category"
            {...register("category", {
              required: "Product category is required",
            })}
          />
          <p className="text-red-500 text-sm m-2">{errors.category?.message}</p>
        </div>
        <div>
          <label
            htmlFor="stock"
            className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Stock
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            placeholder={12}
            {...register("stock", {
              required: "product stock is required",
            })}
          />
          <p className="text-red-500 text-sm m-2">{errors.stock?.message}</p>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={8}
            className="block w-full h-40 p-3 text-sm text-slate-900 bg-white dark:bg-slate-800 dark:text-white rounded-xl border border-slate-200 dark:border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            placeholder="Your description here"
            defaultValue={""}
          />
        </div>

        <div className="flex items-center justify-center w-full sm:col-span-2">
          <label
            htmlFor="images"
            className="flex flex-col items-center justify-center w-full h-44 border-2 border-slate-200 dark:border-slate-700 border-dashed rounded-2xl cursor-pointer bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-primary/40 transition"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="images"
              type="file"
              className="hidden"
              multiple
              accept=".png,.jpeg,.jpg"
              onChange={(e) => {
                const files = [];
                const urls = [];

                Array.from(e.target.files).map((file) => {
                  files.push(file);

                  urls.push(URL.createObjectURL(file));
                });

                setProductImages(files);
                setLocalImageUrls(urls);
              }}
            />
          </label>
        </div>

        {localImageUrls.length > 0 && (
          <div className="flex items-center gap-3">
            {localImageUrls.map((url, index) => (
              <Image
                key={index}
                width={50}
                height={50}
                alt=""
                src={url}
                className="w-16 h-16 object-cever p-1 rounded-md bg-slate-300 dark:bg-slate-600"
              />
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-6 py-2.5 mt-6 text-sm font-semibold bg-primary text-white hover:bg-primary-dark hover:shadow-md hover:shadow-primary/20 rounded-xl cursor-pointer transition disabled:opacity-60"
        disabled={loading}
      >
        {loading && <Spinner className="w-4 h-4 text-white/30 fill-white" />}
        {isEditing ? "Save changes" : "Add product"}
      </button>
    </form>
  );
};

export default AddProductForm;
