import React, { useEffect } from "react";
import HeadingBanner from "../../../components/ui/HeadingBanner";
import { getUserOrderHistory } from "../../../services/orderServices";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/reduxHooks";
import { DeliveryStatus, PaymentMethod } from "../../../shared/types/constant";
import type { IOrder } from "../../../shared/types/interfaces";
import { formatIsoDate } from "../../../shared/utils/dateFormte";
import ProductNotFound from "./ProductNotFound";

const MyOrders: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.order);

  useEffect(() => {
    trackOrder();
  }, []);

  const trackOrder = () => {
    dispatch(getUserOrderHistory());
  };

  if (data.length == 0)
    return (
      <span>
        <ProductNotFound title="Your Order history is empty" />
      </span>
    );

  return (
    <div className="max-w-7xl mx-auto pt-10">
      <HeadingBanner title="My" subtitle="Orders" />
      <div className="border-t border-gray-200"></div>

      <div className="flex flex-col divide-y divide-gray-200 border-gray-200 overflow-y-auto h-96">
        {data.length &&
          data.map((order: IOrder) => (
            <>
              {order.items.map((item: any) => (
                <div
                  key={order.id}
                  className="py-6 flex justify-between items-center"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        ${item.price} &nbsp; • &nbsp; Quantity: {item.quantity}{" "}
                        &nbsp; • &nbsp; Size: {item.size}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        <span className="font-medium">Date:</span>{" "}
                        {formatIsoDate(order.createdAt)}
                      </p>
                      <p className="text-gray-500 text-sm">
                        <span className="font-medium">Payment:</span>{" "}
                        {PaymentMethod[order.paymentMethod]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {DeliveryStatus[order.status]}
                  </div>

                  <button
                    onClick={trackOrder}
                    className="border cursor-pointer px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition"
                  >
                    Track Order
                  </button>
                </div>
              ))}
            </>
          ))}
      </div>
    </div>
  );
};

export default MyOrders;
