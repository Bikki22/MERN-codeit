import React from "react";
import logo from "@/assets/images/logo.png";
import NavLinks from "./NavLinks";
import navLinks from "@/constants/navLinks";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 shadow dark:bg-slate-800 dark:text-white ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo}
              className="h-8 w-auto"
              alt="Logo"
              height={100}
              width={100}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Sportzyy
            </span>
          </Link>
          {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              className="px-2 py-1 rounded-full border mr-2"
              onClick={() => dispatch(toggleTheme())}
            >
              {theme == LIGHT_THEME ? (
                <MdOutlineLightMode />
              ) : (
                <MdOutlineDarkMode />
              )}
            </button>
            {user ? (
              <AuthUser user={user} />
            ) : (
              <Link
                href={"/login"}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Login
              </Link>
            )}
          </div> */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-800">
              {navLinks.map((navLink, index) => (
                <NavLinks navLink={navLink} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
