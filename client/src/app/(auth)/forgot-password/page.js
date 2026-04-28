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
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Forgot password?
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Enter your email and we&apos;ll send you a reset link
            </p>
          </div>
          <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                placeholder="name@gmail.com"
                {...register("email", { required: "Email is required" })}
              />
              {errors?.email?.message && (
                <p className="text-xs text-red-500 mt-1.5">
                  {errors.email.message}
                </p>
              )}
            </div>
            <label
              htmlFor="remember"
              className="flex items-center gap-2 cursor-pointer text-sm text-slate-600 dark:text-slate-300"
            >
              <input
                id="remember"
                type="checkbox"
                required
                className="w-4 h-4 accent-primary cursor-pointer"
              />
              I accept the{" "}
              <span className="font-medium text-slate-800 dark:text-slate-100">
                Terms and conditions
              </span>
            </label>
            <Button loading={loading} label="Send reset link" />
            <p className="text-sm text-center text-slate-500 dark:text-slate-400">
              Remember your password?{" "}
              <Link
                href={LOGIN_ROUTE}
                className="font-medium text-primary hover:text-primary-dark"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
