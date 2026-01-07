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
        } relative inline-block text-md font-semibold group cursor-pointer py-2 `}
      >
        <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-black text-white transition-all duration-300 group-hover:w-full rounded-full"></span>
        {navLink.label}
      </Link>
    </li>
  );
};

export default NavLinks;
