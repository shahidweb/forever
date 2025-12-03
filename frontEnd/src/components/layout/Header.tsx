import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../shared/hooks/reduxHooks";
import HeaderLoggedIn from "./HeaderLoggedIn";

const Header: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);

  const menuData = [
    { id: 1, link: "/", value: "HOME" },
    { id: 2, link: "/collection", value: "COLLECTION" },
    { id: 3, link: "/about", value: "ABOUT" },
    { id: 4, link: "/contact", value: "CONTACT" },
  ];

  return (
    <div className="bg-white shadow-sm">
      <header className="max-w-7xl mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/">
          <div className="text-2xl font-bold tracking-wide text-gray-800">
            FOREVER<span className="text-pink-400">.</span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {menuData.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.link}
              className={({ isActive }) =>
                isActive ? "text-pink-400" : "hover:text-pink-400 transition"
              }
            >
              {nav.value}
            </NavLink>
          ))}
        </nav>

        <HeaderLoggedIn userName={user?.name || ""} />
      </header>
    </div>
  );
};

export default Header;
