import { Search, User } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RoleType } from "../../shared/types/constant";
import { logout, type IUser } from "../../store/slices/authSlice";
import CartItems from "./CartItems";

interface HeaderProps {
  currentUser: IUser | null;
}

const HeaderLoggedIn: React.FC<HeaderProps> = ({ currentUser }) => {
  const [open, setOpen] = useState(false);
  const initials = currentUser?.name?.charAt(0).toUpperCase();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigator("/login");
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-8 text-gray-800 relative">
      <Search className="w-5 h-5 hover:text-black transition" />

      {!currentUser?.id && (
        <span className="cursor-pointer" onClick={() => navigator("/login")}>
          <User />
        </span>
      )}
      {currentUser?.id && (
        <>
          {currentUser.role === RoleType.USER && <CartItems />}
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer border border-gray-400 text-sm font-semibold"
            onClick={() => setOpen(!open)}
          >
            {initials}
          </button>
        </>
      )}

      {open && (
        <div className="absolute right-0 top-12 bg-white border rounded-md shadow-lg w-40 p-2 z-50 ">
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
