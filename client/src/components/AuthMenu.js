"use client";

import { LOGIN_ROUTE } from "@/constants/routes";
import { logoutUser } from "@/redux/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AuthMenu = () => {
  const [refreshToken, setRefreshToken] = useState(null);

  const router = useRouter();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  function logout() {
    dispatch(logoutUser());

    router.push(LOGIN_ROUTE);
  }

  if (user)
    return (
      <button
        onClick={logout}
        className="text-md text-blue-500 border-3 rounded-3xl px-4 py-1 hover:bg-blue-600 hover:text-white cursor-pointer"
      >
        Logout
      </button>
    );

  return (
    <Link
      href={"/login"}
      className="text-md border-3 px-4 py-1 rounded-lg border-slate-800"
    >
      Login
    </Link>
  );
};

export default AuthMenu;
