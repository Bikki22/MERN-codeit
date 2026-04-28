"use client";

import { forgotPassword, resetPassword } from "@/api/auth";
import Button from "@/components/Button";
import { LOGIN_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  console.log(token);

  function submitForm(data) {
    setLoading(true);

    resetPassword({ token, newPassword: data.password })
      .then(() => {
        toast.success("Password reset successfully", {
          autoClose: 1500,
        });
        reset();
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
              Reset password
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Choose a new password to secure your account
            </p>
          </div>
          <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
            <div>
              <label
                htmlFor="password"
                className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                New password
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                {...register("password", {
                  required: "Password is required.",
                })}
              />
              {errors?.password?.message && (
                <p className="text-xs text-red-500 mt-1.5">
                  {errors.password.message}
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
            <Button loading={loading} label="Reset password" />
            <p className="text-sm text-center text-slate-500 dark:text-slate-400">
              Back to{" "}
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

export default ResetPasswordPage;
