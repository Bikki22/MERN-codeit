import { ADMIN_ROLE, MERCHANT_ROLE, USER_ROLE } from "@/constants/roles";
import {
  DASHBOARD_ROUTES,
  ORDER_MANAGEMENT_ROUTE,
  PRODUCT_MANAGEMENT_ROUTE,
  PROFILE_ROUTES,
  USER_MANAGEMENT_ROUTE,
} from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaChartPie,
  FaLuggageCart,
  FaShoppingBasket,
  FaUserCog,
  FaUsers,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const adminMenu = [
  {
    route: DASHBOARD_ROUTES,
    label: "Dashboard",
    icon: <FaChartPie />,
    allowedRoles: [ADMIN_ROLE, MERCHANT_ROLE, USER_ROLE],
  },
  {
    route: PRODUCT_MANAGEMENT_ROUTE,
    label: "Product Management",
    icon: <FaShoppingBasket />,
    allowedRoles: [ADMIN_ROLE, MERCHANT_ROLE, USER_ROLE],
  },
  {
    route: ORDER_MANAGEMENT_ROUTE,
    label: "Order Management",
    icon: <FaLuggageCart />,
    allowedRoles: [ADMIN_ROLE, MERCHANT_ROLE, USER_ROLE],
  },
  {
    route: USER_MANAGEMENT_ROUTE,
    label: "User Management",
    icon: <FaUsers />,
    allowedRoles: [ADMIN_ROLE, MERCHANT_ROLE, USER_ROLE],
  },
  {
    route: PROFILE_ROUTES,
    label: "Profile",
    icon: <FaUserCog />,
    allowedRoles: [ADMIN_ROLE, MERCHANT_ROLE, USER_ROLE],
  },
];

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-64 bg-white dark:bg-slate-900 fixed top-0 left-0 h-full z-20 border-r border-slate-200 dark:border-slate-800 pt-16">
      <div className="px-3 py-4 flex flex-col gap-1">
        <p className="text-[11px] font-semibold tracking-widest text-slate-400 uppercase px-3 mb-2">
          Admin
        </p>
        {adminMenu.map((menu) => {
          const isActive = pathname.startsWith(menu.route);

          if (!user.roles.some((role) => menu.allowedRoles.includes(role)))
            return null;

          return (
            <Link
              href={menu.route}
              key={menu.route}
              className={`px-3 py-2.5 rounded-xl flex items-center gap-3 text-sm font-medium transition ${
                isActive
                  ? "bg-primary text-white shadow-sm shadow-primary/20"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <span className={isActive ? "text-white" : "text-slate-400"}>
                {menu.icon}
              </span>
              {menu.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
