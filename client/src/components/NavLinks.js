"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ navLink }) => {
  const pathname = usePathname();

  const isActive =
    pathname === navLink.route ||
    (navLink.route !== "/" && pathname.startsWith(navLink.route));

  return (
    <li className="w-full px-5 py-2 list-none font-medium">
      <Link
        href={navLink.route}
        className={`${
          isActive ? "text-red-500" : ""
        } block relative py-2 px-3 text-gray-900 rounded-sm border-b border-gray-100 hover:bg-zinc-500 transition-all hover:text-white lg:border-0 `}
      >
        {navLink.label}
      </Link>
    </li>
  );
};

export default NavLinks;
