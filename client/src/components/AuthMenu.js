"use client";

import { LOGIN_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AuthMenu = () => {
  const [refreshToken, setRefreshToken] = useState(null);

  const router = useRouter();

  function logout() {
    localStorage.removeItem("refreshToken");

    router.push(LOGIN_ROUTE);
  }

  useEffect(() => {
    const token = localStorage.getItem("refreshToken");

    setRefreshToken(token);
  }, []);

  if (refreshToken)
    return (
      <button
        onClick={logout}
        className="text-sm text-blue-500 border-2 rounded-3xl px-4 py-1 hover:bg-blue-600"
      >
        Logout
      </button>
    );

  return (
    <Link
      href={"/login"}
      className="text-sm text-secondary borde-2 rounded-3xl px-4 py-1 hover:bg-blue-500"
    >
      Login
    </Link>
  );
};

export default AuthMenu;
