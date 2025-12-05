import { Package } from "lucide-react";
import { useEffect } from "react";
import {
  allOrderHistory,
  updateOrderStatus,
} from "../../../services/orderServices";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/reduxHooks";
import {
  PaymentMethod,
  PaymentStatus
} from "../../../shared/types/constant";
import type { IOrder } from "../../../shared/types/interfaces";
import { formatIsoDate } from "../../../shared/utils/dateFormte";

const AdminOrderCard: React.FC = () => {
  const { data } = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(allOrderHistory());
  }, []);

  const onStatusChange = (status: string, orderId: string) => {
    const payload = { status, orderId };
    dispatch(updateOrderStatus(payload));
  };

  return (
    <div className="">
      {data.length &&
        data.map((order: IOrder) => (
          <>
            <div className="border p-6 rounded-xs border-gray-200 bg-white my-4">
              <div className="flex gap-3 justify-between">
                {/* Left Icon */}
                <div className="flex items-start">
                  <div className="p-4 bg-gray-100 rounded-lg">
                    <Package className="w-10 h-10 text-gray-500" />
                  </div>
                </div>

                {/* Order Details */}
                <div className="flex-1">
                  {/* Items List */}
                  <div className="text-gray-700 mb-2">
                    {order.items.map((item, i) => (
                      <p key={i} className="leading-6">
                        {item.productId.name} x {item.quantity} , {item.size}
                      </p>
                    ))}
                  </div>

                  {/* Customer Address */}
                  <div className="mt-4 text-gray-700">
                    <p className="font-semibold">
                      {order.address.firstName} {order.address.lastName}
                    </p>
                    <div className="text-sm">
                      <p>{order.address.street},</p>
                      <p>
                        {order.address.city}, {order.address.state},{" "}
                        {order.address.country}, {order.address.zipcode}
                      </p>
                      <p>{order.address.phone}</p>
                    </div>
                  </div>
                </div>

                {/* Order Meta Info */}
                <div className="text-gray-700 w-48">
                  <p className="">
                    <span className="font-semibold">Items : </span>
                    <span>{order.items.length}</span>
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold">Method:</span>{" "}
                    {PaymentMethod[order.paymentMethod]}
                  </p>
                  <p>
                    <span className="font-semibold">Payment:</span>{" "}
                    {PaymentStatus[order.paymentStatus]}
                  </p>
                  <p>
                    <span className="font-semibold">Date:</span>{" "}
                    {formatIsoDate(order.createdAt)}
                  </p>
                </div>
                <div className="w-48">
                  <p className="flex justify-between">
                    <span>${order.total}</span>
                  </p>
                </div>
                <div>
                  <select
                    value={order.status}
                    onChange={(e) => onStatusChange(e.target.value, order._id)}
                    className="mt-4 w-full border rounded-lg px-3 py-2 text-gray-700 cursor-pointer"
                  >
                    <option value="processing">Order Placed</option>
                    <option value="shipped">Shipped</option>
                    <option value="out_of_delivery">Out for Delivery</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default AdminOrderCard;
