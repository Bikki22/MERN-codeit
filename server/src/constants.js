export const UserRoleEnum = {
  ADMIN: "ADMIN",
  USER: "USER",
  MERCHANT: "MERCHANT",
};

export const AvailableUserRoles = Object.values(UserRoleEnum);

export const USER_TEMPORARY_TOKEN_EXPIRY = 20 * 60 * 1000; // 20 minutes

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

export const PaymentStatusEnum = {
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
};

export const AvailablePaymentStatus = Object.values(PaymentStatusEnum);

export const PRODUCT_DESCRIPTION_PROMPT =
  "Write a compelling and SEO-friendly product description for my e-commerce store. Follow these details: Name: %s, Brand: %s, Category: %s. Make the description engaging, highlight benefits. Ignore extra messages.";
