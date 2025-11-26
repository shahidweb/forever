import { useEffect, useState } from "react";
import HeadingBanner from "../../../components/ui/HeadingBanner";
import Button from "../../../components/ui/Button";
import { cartTotals } from "../../../shared/types/constant";
import { Link } from "react-router-dom";

function CartTotal({ isPaymentShow = false }) {
  const [paymentMethod, setPaymentMethod] = useState<any>();
  const [cartItems, setCartItems] = useState(cartTotals);

  useEffect(()=>{
    
  })

  return (
    <div>
      <HeadingBanner title="Cart" subtitle="Totals" />
      <div className="mb-10">
        {cartItems &&
          cartItems.map((item) => (
            <div
              key={item.id}
              className={`${
                item.id === 3 ? "font-semibold" : ""
              } flex justify-between text-gray-700 pb-2 mb-3 border-b border-gray-200`}
            >
              <span>{item.lable}</span>
              <span>${item.value}</span>
            </div>
          ))}
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
