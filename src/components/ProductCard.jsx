import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/cart";
import { useNavigate } from "react-router";

const ProductCard = ({ product,  }) => {
  const dispatch = useDispatch();
  const navigate= useNavigate()
  return (
    <div className="w-72 px-4  ">
      <div className="relative group bg-[#f3f3f3] rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-95 object-cover"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
          <button
            onClick={() => {
              dispatch(addToCart(product));
              navigate("cart")
            }}
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Add To Cart
          </button>

          <button
            onClick={() => {
              dispatch(addToCart(product));
              navigate("cart")
            }}
            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-sm font-medium">{product.title}</p>
        <p className="font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
