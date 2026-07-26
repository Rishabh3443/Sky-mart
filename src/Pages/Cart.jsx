import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../Features/cart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const shipping = subtotal > 0 ? 10 : 0;

  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black uppercase tracking-wide text-gray-900 mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm gap-6"
              >
                <div className="flex items-center gap-6 w-full sm:w-auto">
                  <div className="w-24 h-28 bg-gray-100 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-gray-900 font-bold text-base sm:text-lg line-clamp-1">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      {item.category}
                    </p>

                    <p className="text-black font-extrabold text-lg mt-1">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 border-t sm:border-t-0 pt-4 sm:pt-0 border-gray-100">
                  <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="px-3 py-1 bg-gray-50 hover:bg-gray-200 text-black font-bold transition-colors cursor-pointer"
                    >
                      -
                    </button>

                    <span className="px-4 py-1 text-black font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="px-3 py-1 bg-gray-50 hover:bg-gray-200 text-black font-bold transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-700 transition-colors text-xl cursor-pointer"
                  >
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm h-fit flex flex-col gap-6">
            <h2 className="text-xl font-black uppercase tracking-wide text-gray-900 border-b border-gray-100 pb-4">
              Order Summary
            </h2>

            <div className="flex flex-col gap-4 text-gray-700">
              <div className="flex justify-between font-medium">
                <span>Subtotal</span>
                <span className="font-bold text-black">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between font-medium">
                <span>Shipping Estimate</span>
                <span className="font-bold text-black">
                  ${shipping.toFixed(2)}
                </span>
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-black text-black">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full py-4 border border-black bg-white text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;