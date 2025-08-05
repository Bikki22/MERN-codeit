import { ApiError } from "./ApiError";
import axios from "axios";

const payViaKhalti = async (data) => {
  if (!data) throw new ApiError(404, "payment data is requried");
  if (!data.amount) throw new ApiError(404, "payment amount is requried");
  if (!data.purchaseOrderId)
    throw new ApiError(404, "purchase order id is requried");

  if (!data.purchaseOrderName)
    throw new ApiError(404, "Purchase order name is requried");

  const body = {
    return_url: process.env.KHALTI_RETURN_URL,
    amount: data.amount,
    website_url: process.env.APP_URL,
    purchase_order_id: data.purchaseOrderId,
    purchase_order_name: data.purchaseOrderNamer,
    customer_info: {
      name: data.customer.name,
      email: data.customer.email,
      phone: data.customer.phone,
    },
  };

  const response = await axios.post(
    `${process.env.KHALTI_API_URL}/epayment/initiate/`,
    data,
    {
      headers: {
        Authorization: `key ${process.env.KHALTI_API_KEY}`,
      },
    }
  );

  return response.data;
};

export default payViaKhalti;
