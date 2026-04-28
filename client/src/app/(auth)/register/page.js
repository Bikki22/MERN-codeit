import { LOGIN_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Create account
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Sign up to start shopping
            </p>
          </div>
          <form className="space-y-5">
            <div>
              <label
                htmlFor="username"
                className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Full name
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                placeholder="Jane Doe"
              />
            </div>
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
              />
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
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold rounded-xl text-sm px-5 py-3 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 cursor-pointer transition"
            >
              Create account
            </button>
            <p className="text-sm text-center text-slate-500 dark:text-slate-400">
              Already have an account?{" "}
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

export default RegisterPage;
