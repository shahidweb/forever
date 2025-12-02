import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import HeadingBanner from "../../../components/ui/HeadingBanner";
import { useAppSelector } from "../../../shared/hooks/reduxHooks";

// interface ICartTotal {
//   isPaymentShow?: boolean;
//   items: IProduct[];
// }

interface ITotalCart {
  subTotal: number;
  shipping: number;
  total: number;
}

function CartTotal({ isPaymentShow = false }) {
  const [paymentMethod, setPaymentMethod] = useState<any>();
  const [cartItems, setCartItems] = useState<ITotalCart>({} as ITotalCart);
  const { items } = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (items && items.length == 0) return;

    const subTotal = items.reduce(
      (sum, item) => sum + item.productId.price * (item.quantity ?? 1),
      0
    );

    const updated = {
      subTotal: subTotal,
      shipping: 11,
      total: subTotal + 11,
    };
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
          <span>${cartItems.subTotal}</span>
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
            <label className="flex items-center gap-2 border p-3 rounded-md cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="stripe"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked={paymentMethod === "stripe"}
              />
              <img
                src="/src/assets/img/stripe_logo.png"
                alt="stripe"
                className="h-5"
              />
            </label>

            <label className="flex items-center gap-2 border p-3 rounded-md cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="razorpay"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked={paymentMethod === "razorpay"}
              />
              <img
                src="/src/assets/img/razorpay_logo.svg"
                alt="razorpay"
                className="h-5"
              />
            </label>

            <label className="flex items-center gap-2 border p-3 rounded-md cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="cod"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked={paymentMethod === "cod"}
              />
              <span className="text-sm font-medium">CASH ON DELIVERY</span>
            </label>
          </div>
          <div className="text-end">
            <Link to={"/orders"}>
              <Button value="PLACE ORDER" />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

export default CartTotal;
