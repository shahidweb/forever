import { Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/authSlice";

interface HeaderProps {
  cartCount: number;
  userName: string;
}

const HeaderLoggedIn: React.FC<HeaderProps> = ({ cartCount, userName }) => {
  const [open, setOpen] = useState(false);
  const initials = userName?.charAt(0).toUpperCase();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigator("/login");
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-8 text-gray-800 relative">
      {/* Search */}
      {/* <Link to="/search"> */}
      <Search className="w-5 h-5 hover:text-black transition" />
      {/* </Link> */}

      {/* Cart */}
      {userName && (
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 hover:text-black transition" />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      )}

      {/* Profile Dropdown */}
      {!userName && (
        <span className="cursor-pointer" onClick={() => navigator("/login")}>
          <User />
        </span>
      )}
      {userName && (
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer border border-gray-400 text-sm font-semibold"
          onClick={() => setOpen(!open)}
        >
          {initials}
        </button>
      )}

      {open && (
        <div className="absolute right-0 top-12 bg-white border rounded-md shadow-lg w-40 p-2 z-50 ">
          <Link
            to="/account"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            My Account
          </Link>
          <Link
            to="/orders"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 hover:bg-gray-100 rounded"
          >
            My Orders
          </Link>
          <button
            onClick={onLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer rounded text-red-500"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderLoggedIn;
