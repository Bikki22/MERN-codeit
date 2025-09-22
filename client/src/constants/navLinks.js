import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
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
    route: CONTACT_ROUTE,
    label: "Contact",
  },
];

export default navLinks;
