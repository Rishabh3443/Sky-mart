import React from "react";
import "remixicon/fonts/remixicon.css";
import { Link, useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/register") {
    return null;
  }

  if (location.pathname === "/login") {
    return null;
  }

  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cart);

  const cartCount = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className="h-15 flex justify-between items-center p-4 border-b-2 border-black">
      {/* Left */}
      <div className="flex gap-5 text-xl font-mono">
        <Link to="/" className="active:underline cursor-pointer">
          HOME
        </Link>

        <Link to="/shop" className="active:underline cursor-pointer">
          SHOP
        </Link>

        <Link to="/about" className="active:underline cursor-pointer">
          ABOUT US
        </Link>
      </div>

      {/* Logo */}
      <div className='text-3xl font-bold font-[-apple-system,BlinkMacSystemFont,"Segoe_UI",Helvetica,Arial,sans-serif]'>
        SKY MART
      </div>

      {/* Right */}
      <div className="flex gap-4 text-2xl items-center">
        <i
          onClick={() => navigate("/shop")}
          className="ri-search-line cursor-pointer"
        ></i>

        <i
          onClick={() => navigate("/profile")}
          className="ri-user-line cursor-pointer"
        ></i>

        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <i className="ri-shopping-cart-2-line text-2xl"></i>

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;