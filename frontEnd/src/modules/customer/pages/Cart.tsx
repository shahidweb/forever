import { Trash2 } from "lucide-react";
import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import HeadingBanner from "../../../components/ui/HeadingBanner";
import {
  addUpdateCartItems,
  deleteCartItems,
} from "../../../services/cartServices";
import { fetchAllProductList } from "../../../services/productServices";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/reduxHooks";
import { debounce } from "../../../shared/utils/debounce";
import type { ICartItems } from "../../../store/slices/cartSlice";
import CartTotal from "../components/CartTotal";
import ProductNotFound from "./ProductNotFound";

function Cart() {
  const { items } = useAppSelector((state) => state.cart);
  const { data } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const updateQuantity = (quantity: number, item: ICartItems) => {
    const payload = {
      productId: item.productId._id,
      quantity,
      size: item?.size,
    };
    debouncedApiCall(payload);
  };

  const debouncedApiCall = useCallback(
    debounce((payload: any) => {
      dispatch(addUpdateCartItems(payload));
    }, 500),
    []
  );

  const removeItem = (productId: string, size: string) => {
    const payload = {
      productId,
      size,
    };
    dispatch(deleteCartItems(payload));
  };
  useEffect(() => {
    if (data.length == 0) {
      dispatch(fetchAllProductList());
    }
  }, []);

  if (items.length == 0)
    return (
      <span>
        <ProductNotFound title="Your Cart is empty" />
      </span>
    );

  return (
    <>
      <section className="max-w-7xl mx-auto pt-10">
        <HeadingBanner title="Your" subtitle="Cart" />
        <div className="border-t border-gray-200"></div>
        <div className="flex flex-col divide-y divide-gray-200">
          {items.map((item: ICartItems, i) => (
            <div
              key={`${item.productId._id}_${i}`}
              className="flex items-center justify-between py-6"
            >
              {/* Left: Image and details */}
              <div className="flex items-center gap-5 w-1/2">
                <img
                  src={item.productId.images[0]}
                  alt={item.productId.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-800">
                    {item.productId.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    ${item.productId.price}
                  </p>
                  <span className="inline-block border text-sm px-2 py-0.5 mt-1 rounded-md text-gray-700">
                    {item?.size}
                  </span>
                </div>
              </div>

              {/* Middle: Quantity */}
              <div>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(Number(e.target.value), item)}
                  className="w-16 border border-gray-300 rounded-md text-center py-1"
                />
              </div>

              {/* Right: Delete icon */}
              <button
                onClick={() =>
                  removeItem(
                    item.productId._id,
                    item.size ? item.size : item.productId.sizes[0]
                  )
                }
              >
                <Trash2 className="w-5 h-5 text-gray-500 hover:text-red-500 transition cursor-pointer" />
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
