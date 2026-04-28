"use client";

import { login } from "@/api/auth";
import Spinner from "@/components/Spinner";
import {
  FORGOT_PASSWORD_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "@/constants/routes";
import { loginUser } from "@/redux/auth/authActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { user, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  function submitForm(data) {
    setLoading(true);
    dispatch(loginUser(data));
  }

  useEffect(() => {
    if (error) {
      toast.error(error, {
        autoClose: 1000,
      });
    }

    if (user) router.push(HOME_ROUTE);
  }, [user, error, router]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Welcome back
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Login to your account to continue
            </p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit(submitForm)}>
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
                placeholder="name@company.com"
                {...register("email", { required: "Email is required." })}
              />
              {errors.email?.message && (
                <p className="text-xs text-red-500 mt-1.5">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Password
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
              {errors.password?.message && (
                <p className="text-xs text-red-500 mt-1.5">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="remember"
                className="flex items-center gap-2 cursor-pointer text-sm text-slate-600 dark:text-slate-300"
              >
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 accent-primary cursor-pointer"
                />
                Remember me
              </label>
              <Link
                href={FORGOT_PASSWORD_ROUTE}
                className="text-sm font-medium text-primary hover:text-primary-dark"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white font-semibold rounded-xl text-sm px-5 py-3 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 cursor-pointer flex justify-center items-center gap-2 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading && (
                <Spinner className="w-4 h-4 text-white/30 fill-white" />
              )}
              Login
            </button>

            <p className="text-sm text-center text-slate-500 dark:text-slate-400">
              Don&apos;t have an account?{" "}
              <Link
                href={REGISTER_ROUTE}
                className="font-medium text-primary hover:text-primary-dark"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
