import { ADMIN_ROLE, MERCHANT_ROLE } from "@/constants/roles";
import { toast } from "react-toastify";

export function allowedRoles(userRoles) {
  try {
    const dashboardRoles = [ADMIN_ROLE, MERCHANT_ROLE];

    return userRoles.some((role) => dashboardRoles.includes(role));
  } catch (error) {
    toast.error(error, {
      autoClose: 1500,
    });
  }
}
