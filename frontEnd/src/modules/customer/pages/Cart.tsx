import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import HeadingBanner from "../../../components/ui/HeadingBanner";
import { cartItemsData } from "../../../shared/types/constant";
import type { ICartItem } from "../../../shared/types/interfaces";
import CartTotal from "../components/CartTotal";

function Cart() {
  const [cartItems, setCartItems] = useState<ICartItem[]>(cartItemsData);

  const updateQuantity = (a: number, b: number) => {
    console.log("s");
  };
  const removeItem = (id: number) => {
    console.log("s");
  };

  return (
    <>
      <section className="max-w-7xl mx-auto pt-10">
        <HeadingBanner title="Your" subtitle="Cart" />
        <div className="border-t border-gray-200"></div>
        <div className="flex flex-col divide-y divide-gray-200">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-6"
            >
              {/* Left: Image and details */}
              <div className="flex items-center gap-5 w-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">${item.price}</p>
                  <span className="inline-block border text-sm px-2 py-0.5 mt-1 rounded-md text-gray-700">
                    {item.size}
                  </span>
                </div>
              </div>

              {/* Middle: Quantity */}
              <div>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  className="w-16 border border-gray-300 rounded-md text-center py-1"
                />
              </div>

              {/* Right: Delete icon */}
              <button onClick={() => removeItem(item.id)}>
                <Trash2 className="w-5 h-5 text-gray-500 hover:text-red-500 transition" />
              </button>
            </div>
          ))}
        </div>
        <div className="border-b border-gray-200"></div>
      </section>
      <section className="w-96 ml-auto pt-10 me-30">
        <CartTotal />
        <div className="text-right mb-10">
          <Link to={"/place-order"}>
            <Button value="Proceed to checkout" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Cart;
