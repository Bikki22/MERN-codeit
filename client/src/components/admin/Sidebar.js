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
    <div className="hidden lg:block w-64 bg-white absolute top-0 left-0 h-full z-20 border-r border-gray-300 dark:bg-gray-900 dark:border-gray-700">
      <div className="p-4 flex flex-col gap-1">
        {adminMenu.map((menu) => {
          const isActive = pathname.startsWith(menu.route);

          if (!user.roles.some((role) => menu.allowedRoles.includes(role)))
            return null;

          return (
            <Link
              href={menu.route}
              key={menu.route}
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                isActive
                  ? "bg-primary text-white"
                  : "bg-primary/5 text-gray-700 dark:text-white dark:bg-gray-700"
              }`}
            >
              {menu.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
