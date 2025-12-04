import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import Button from "../../../components/ui/Button";
import HeadingBanner from "../../../components/ui/HeadingBanner";
import { useAppSelector } from "../../../shared/hooks/reduxHooks";
import { cartTotalCal } from "../../../shared/utils/cartCal";

interface ITotalCart {
  subtotal: number;
  shipping: number;
  total: number;
}

interface ICartTotalProps {
  isPaymentShow?: boolean;
  control?: any;
}

function CartTotal({ isPaymentShow = false, control }: ICartTotalProps) {
  const [cartItems, setCartItems] = useState<ITotalCart>({} as ITotalCart);
  const { items } = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (items && items.length == 0) return;
    const updated = cartTotalCal(items);
    setCartItems(updated);
  }, [items]);

  return (
    <div>
      <HeadingBanner title="Cart" subtitle="Totals" />
      <div className="mb-10">
        <div
          className={`flex justify-between text-gray-700 pb-2 mb-3 border-b border-gray-200`}
        >
          <span>Subtotal</span>
          <span>${cartItems.subtotal}</span>
        </div>
        <div
          className={`flex justify-between text-gray-700 pb-2 mb-3 border-b border-gray-200`}
        >
          <span>Shipping Fee</span>
          <span>${cartItems.shipping}</span>
        </div>
        <div
          className={`flex justify-between font-semibold text-gray-700 pb-2 mb-3 border-b border-gray-200`}
        >
          <span>Total</span>
          <span>${cartItems.total}</span>
        </div>
      </div>

      {/* PAYMENT METHOD */}
      {isPaymentShow && (
        <section id="payment_section">
          <HeadingBanner title="PAYMENT" subtitle="METHOD" classes="text-sm" />
          <div className="flex flex-wrap gap-3 mb-6 justify-between">
            <Controller
              name="paymentMethod"
              control={control}
              render={({ field }) => (
                <>
                  <label className="flex items-center gap-2 border p-3 rounded-md cursor-pointer">
                    <input
                      {...field}
                      type="radio"
                      value="stripe"
                      checked={field.value === "stripe"}
                    />
                    <img
                      src="/src/assets/img/stripe_logo.png"
                      alt="stripe"
                      className="h-5"
                    />
                  </label>

                  <label className="flex items-center gap-2 border p-3 rounded-md cursor-pointer">
                    <input
                      {...field}
                      type="radio"
                      value="razorpay"
                      checked={field.value === "razorpay"}
                    />
                    <img
                      src="/src/assets/img/razorpay_logo.svg"
                      alt="razorpay"
                      className="h-5"
                    />
                  </label>

                  <label className="flex items-center gap-2 border p-3 rounded-md cursor-pointer">
                    <input
                      {...field}
                      type="radio"
                      value="cod"
                      checked={field.value === "cod"}
                    />
                    <span className="text-sm font-medium">
                      CASH ON DELIVERY
                    </span>
                  </label>
                </>
              )}
            />
          </div>
          <div className="text-end">
            <Button value="PLACE ORDER" type="submit" />
          </div>
        </section>
      )}
    </div>
  );
}

export default CartTotal;
