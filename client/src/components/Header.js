import React from "react";
import logo from "@/assets/images/logo.png";
import NavLinks from "./NavLinks";
import navLinks from "@/constants/navLinks";
import Link from "next/link";
import Image from "next/image";
import AuthMenu from "./AuthMenu";
import ThemeButton from "./ThemeButton";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="border-gray-200 shadow">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              className="h-8 w-auto rounded-xl"
              alt="Logo"
              height={100}
              width={100}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </span>
          </Link>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              {navLinks.map((navLink, index) => (
                <NavLinks navLink={navLink} key={index} />
              ))}
            </ul>
          </div>

          <div className="items-center justify-between md:flex md:order-2">
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
