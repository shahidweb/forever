import React from "react";
import { orders } from "../../../shared/types/constant";
import HeadingBanner from "../../../components/ui/HeadingBanner";

const MyOrders: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10">
      <HeadingBanner title="My" subtitle="Orders" />
      <div className="border-t border-gray-200"></div>

      <div className="flex flex-col divide-y">
        {orders.map((item) => (
          <div key={item.id} className="py-6 flex justify-between items-center">
            <div className="flex items-center gap-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div>
                <h3 className="font-medium text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  ${item.price} &nbsp; • &nbsp; Quantity: {item.quantity} &nbsp;
                  • &nbsp; Size: {item.size}
                </p>

                <p className="text-gray-500 text-sm mt-1">Date: {item.date}</p>
                <p className="text-gray-500 text-sm">Payment: {item.payment}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {item.status}
            </div>

            <button className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition">
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
