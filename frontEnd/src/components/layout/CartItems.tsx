import { ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllCartItems } from "../../services/cartServices";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/reduxHooks";

function CartItems() {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCartItems());
  }, []);

  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className="w-6 h-6 hover:text-black transition" />
      <span className="absolute -top-2 -right-3 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {items.length}
      </span>
    </Link>
  );
}

export default CartItems;
