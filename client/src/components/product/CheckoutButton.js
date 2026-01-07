import { createOrder } from "@/api/orders";
import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import { useRouter } from "next/navigation";
import { ORDERS_ROUTES } from "@/constants/routes";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/cart/cartSlice";

const CheckoutButton = ({ products, totalPrice }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();

  function checkoutOrder() {
    setLoading(true);

    createOrder({
      items: products.map((product) => ({
        product: product._id,
        quantity: product.quantity,
      })),
      totalPrice,
      shippingAddress: {
        city: "Biratnagar",
        province: "Koshi",
        street: "ganga chowk",
      },
    })
      .then(() => {
        toast.success("Order created successfully", {
          autoClose: 1500,
        }),
          router.push(ORDERS_ROUTES),
          dispatch(clearCart());
      })
      .catch((error) => toast.error(error.message, { autoClose: 1500 }))
      .finally(() => setLoading(false));
  }

  return (
    <button
      onClick={checkoutOrder}
      className="bg-primary text-sm text-white px-4 py-2 rounded-md hover:bg-primary/90 cursor-pointer flex item-center gap-3 disabled:cursor-not-allowed"
      disabled={products.length === 0}
    >
      checkout | Rs. {totalPrice}
      {loading && <Spinner className="w-4 h-4 fill-secondary" />}
    </button>
  );
};

export default CheckoutButton;
