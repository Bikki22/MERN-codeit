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
    <li className="list-none">
      <Link
        href={navLink.route}
        className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors inline-block ${
          isActive
            ? "text-primary bg-primary/10 dark:text-white dark:bg-primary/20"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
        }`}
      >
        {navLink.label}
      </Link>
    </li>
  );
};

export default NavLinks;
