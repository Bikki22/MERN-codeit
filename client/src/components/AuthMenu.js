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
        <button className="ml-2 relative" onClick={() => setShowPopup(true)}>
          <FaUser className="w-8 h-8 p-1 rounded-full bg-gray-300 cursor-pointer" />
        </button>
        {showPopup && (
          <UserPopup setShowPopup={setShowPopup} user={user} logout={logout} />
        )}
      </>
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
