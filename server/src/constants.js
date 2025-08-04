export const UserRoleEnum = {
  ADMIN: "ADMIN",
  USER: "USER",
  MERCHANT: "MERCHANT",
};

export const AvailableUserRoles = Object.values(UserRoleEnum);

export const OrderStatusEnum = {
  PENDING: "PENDING",
  CANCELLED: "CANCELLED",
  CONFIRMED: "CONFIRMED",
  DELIVERED: "DELIVERED",
};

export const AvailableOrderStatuses = Object.values(OrderStatusEnum);

export const PaymentProviderEnum = {
  UNKNOWN: "UNKNOWN",
  ESEWA: "ESEWA",
  KHALTI: "KHALTI",
};

export const AvailablePaymentProvider = Object.values(PaymentProviderEnum);
