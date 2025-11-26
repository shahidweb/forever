import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-8 py-4 max-w-7xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide text-gray-900">
            FOREVER<span className="text-pink-500">.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-pink-500 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-pink-500 transition-colors duration-200"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/delivery"
                className="hover:text-pink-500 transition-colors duration-200"
              >
                Delivery
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-pink-500 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            GET IN TOUCH
          </h3>
          <p className="text-sm text-gray-500">+1-212-456-7890</p>
          <p className="text-sm text-gray-500">contact@foreveryou.com</p>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Forever. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
