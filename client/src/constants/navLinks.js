import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  ORDERS_ROUTES,
  PRODUCT_ROUTE,
} from "./routes";

const navLinks = [
  {
    route: HOME_ROUTE,
    label: "Home",
  },
  {
    route: ABOUT_ROUTE,
    label: "About",
  },
  {
    route: PRODUCT_ROUTE,
    label: "Products",
  },
  {
    route: ORDERS_ROUTES,
    label: "Orders",
  },
  {
    route: CONTACT_ROUTE,
    label: "Contact",
  },
];

export default navLinks;
