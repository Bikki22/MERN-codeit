"use client";

import Button from "@/components/Button";
import ProfileImage from "@/components/ProfileImage";
import { updateUserProfile } from "@/redux/auth/authActions";
import { resetSuccess } from "@/redux/auth/authSlice";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const { error, user, success } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: user?.username,
      email: user?.email,
      phone: user?.phone,
    },
  });

  const dispatch = useDispatch();

  function submitForm(data) {
    setLoading(true);
    dispatch(
      updateUserProfile({
        id: user._id,
        name: data.name,
        phone: data.phone,
        address: {
          province: data.province,
        },
      })
    );
  }

  useEffect(() => {
    if (error) {
      toast.error(error, {
        autoClose: 1000,
      });
    }

    if (success) {
      toast.success("User updated successfully.", {
        autoClose: 1000,
      });

      dispatch(resetSuccess());
    }
  }, [error, success]);

  return (
    <section>
      <div className="container mx-auto max-w-5xl">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
          Settings
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
          Your profile
        </h1>
        <div className="p-6 sm:p-8 space-y-6 dark:bg-slate-900 bg-white rounded-3xl w-full border border-slate-200 dark:border-slate-800 shadow-sm">
          <ProfileImage user={user} />
          <form
            onSubmit={handleSubmit(submitForm)}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                placeholder="John doe"
                {...register("name", {
                  required: "Name is required.",
                })}
              />
              <p className="text-red-600 text-sm m-1">{errors.name?.message}</p>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="disabled:bg-slate-100 disabled:text-slate-500 dark:disabled:bg-slate-800 dark:disabled:text-slate-400 w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                placeholder="name@company.com"
                disabled
                {...register("email")}
              />
              <p className="text-red-600 text-sm m-1">
                {errors.email?.message}
              </p>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                placeholder="9876543210"
                {...register("phone", {
                  required: "Phone number is required.",
                })}
              />
              <p className="text-red-600 text-sm m-1">
                {errors.phone?.message}
              </p>
            </div>

            {/* city */}
            <div>
              <label
                htmlFor="city"
                className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Address City
              </label>
              <input
                type="text"
                id="city"
                className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                placeholder="Itahari"
                {...register("city", {
                  required: "Address city is required.",
                })}
              />
              <p className="text-red-600 text-sm m-1">{errors.city?.message}</p>
            </div>

            <div>
              <label
                htmlFor="province"
                className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Province
              </label>
              <select
                id="province"
                className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                {...register("province", {
                  required: "Province is required.",
                })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select province
                </option>
                <option value="Bagmati">Bagmati</option>
                <option value="Gandaki">Gandaki</option>
                <option value="Karnali">Karnali</option>
                <option value="Koshi">Koshi</option>
                <option value="Lumbini">Lumbini</option>
                <option value="Madesh">Madesh</option>
                <option value="Sudurpaschim">Sudurpaschim</option>
              </select>
              <p className="text-red-600 text-sm m-1">
                {errors.province?.message}
              </p>
            </div>
            <Button loading={loading} label="Update user" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
