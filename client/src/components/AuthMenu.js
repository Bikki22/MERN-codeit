"use client";

import { LOGIN_ROUTE } from "@/constants/routes";
import { logoutUser } from "@/redux/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import UserPopup from "./UserPopup";

const AuthMenu = () => {
  const [refreshToken, setRefreshToken] = useState(null);

  const [showPopup, setShowPopup] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  function logout() {
    dispatch(logoutUser());

    router.push("/login");
  }

  if (user)
    return (
      <>
        <button
          className="ml-2 relative cursor-pointer"
          onClick={() => setShowPopup(true)}
          aria-label="User menu"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white shadow-sm ring-1 ring-slate-200 dark:ring-slate-700 hover:scale-105 transition">
            <FaUser className="w-3.5 h-3.5" />
          </span>
        </button>
        {showPopup && (
          <UserPopup setShowPopup={setShowPopup} user={user} logout={logout} />
        )}
      </>
    );

  return (
    <Link
      href={"/login"}
      className="ml-2 inline-flex items-center justify-center rounded-xl bg-primary text-white text-sm font-medium px-4 py-2 hover:bg-primary-dark hover:shadow-md hover:shadow-primary/20 transition-all"
    >
      Login
    </Link>
  );
};

export default AuthMenu;
