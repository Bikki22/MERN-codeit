"use client";

import Sidebar from "@/components/admin/Sidebar";
import Spinner from "@/components/Spinner";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import { allowedRoles } from "@/helpers/roles";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  const allowRoles = allowedRoles(user.roles);

  useEffect(() => {
    if (!user) {
      router.push(LOGIN_ROUTE);
    }

    if (!allowRoles) router.push(HOME_ROUTE);
  }, [user, router]);

  if (!user || !allowRoles) {
    return (
      <div className="flex justify-center py-20">
        <Spinner className="w-20 h-20 fill-blue-500" />
      </div>
    );
  }

  return (
    <div className="relative lg:pl-64">
      <Sidebar />
      <section className="bg-gray-50 dark:bg-gray-800 min-h-screen py-4 sm:py-8">
        {children}
      </section>
    </div>
  );
};

export default AdminLayout;
