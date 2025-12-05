import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";
import { logout } from "../../../store/slices/authSlice";
import Button from "../../ui/Button";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigator("/admin");
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <header className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <Link to="/admin">
          <div className="text-2xl font-bold tracking-wide text-gray-800">
            FOREVER<span className="text-pink-400">.</span>
          </div>
          <span className="text-xs text-red-400">Admin Panel</span>
        </Link>
        <Button value="Logout" click={onLogout}></Button>
      </header>
    </div>
  );
};

export default Header;
