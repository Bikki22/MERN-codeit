import { ADMIN_ROLE, MERCHANT_ROLE } from "@/constants/roles";

export function allowedRoles(userRoles) {
  const dashboardRoles = [ADMIN_ROLE, MERCHANT_ROLE];

  return userRoles.some((role) => dashboardRoles.includes(role));
}
