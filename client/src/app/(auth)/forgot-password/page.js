"use client";

import { forgotPassword } from "@/api/auth";
import Button from "@/components/Button";
import { LOGIN_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ForgotPasswordPage = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitForm(data) {
    setLoading(true);

    forgotPassword(data)
      .then(() => {
        toast.success("Reset password link sended successfully", {
          autoClose: 1500,
        });
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="p-6 h-screen flex justify-center items-center flex-col">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Forgot Password
      </h1>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="space-y-4 md:space-y-6"
      >
        <div className="">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary"
            placeholder="name@gmail.com"
            {...register("email", { required: "Email is required" })}
          />
          <p className="text-red-600 text-sm m-1">{errors?.email?.message}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                required
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                I accept the
                <span className="font-medium">Terms and conditions</span>
              </label>
            </div>
          </div>
        </div>
        <Button loading={loading} label="Submit" />
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Please login to continue?
          <Link
            href={LOGIN_ROUTE}
            className="font-medium text-primary hover:underline dark:text-primary-500"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
