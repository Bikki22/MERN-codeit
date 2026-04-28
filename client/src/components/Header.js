import React from "react";
import logo from "@/assets/images/logo.png";
import NavLinks from "./NavLinks";
import navLinks from "@/constants/navLinks";
import Link from "next/link";
import Image from "next/image";
import AuthMenu from "./AuthMenu";
import ThemeButton from "./ThemeButton";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-[#0b1020]/80 border-b border-slate-200 dark:border-slate-800">
      <nav>
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse group"
          >
            <Image
              src={logo}
              className="h-9 w-9 rounded-xl ring-1 ring-slate-200 dark:ring-slate-700 group-hover:ring-primary/40 transition"
              alt="Logo"
              height={100}
              width={100}
            />
            <span className="self-center text-xl font-semibold tracking-tight whitespace-nowrap text-slate-900 dark:text-white">
              {process.env.NEXT_PUBLIC_APP_NAME || "ShopHub"}
            </span>
          </Link>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-slate-200 rounded-xl bg-slate-50 md:gap-1 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:border-slate-700 dark:bg-slate-900 md:dark:bg-transparent">
              {navLinks.map((navLink, index) => (
                <NavLinks navLink={navLink} key={index} />
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-1 md:order-2">
            <CartButton />
            <ThemeButton />
            <AuthMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
