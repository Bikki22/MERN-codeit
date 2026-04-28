import { updateOrder } from "@/api/orders";
import { ORDER_STATUS_CONFIRMED } from "@/constants/orderStatus";
import { ORDERS_ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { toast } from "react-toastify";

const CashOnDelivery = ({ order }) => {
  const router = useRouter();

  function confirmOrder() {
    updateOrder(order._id, {
      status: ORDER_STATUS_CONFIRMED,
    })
      .then(() => {
        toast.success("Order confirmed successfully", { autoClose: 1500 });
        router.push(`${ORDERS_ROUTES}?status=${ORDER_STATUS_CONFIRMED}`);
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 1500 });
      });
  }

  return (
    <button
      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 hover:shadow-md hover:shadow-emerald-500/20 px-4 py-2 text-sm font-medium rounded-xl text-white cursor-pointer transition"
      onClick={confirmOrder}
    >
      <LiaMoneyBillWaveSolid />
      Cash On Delivery
    </button>
  );
};

export default CashOnDelivery;
