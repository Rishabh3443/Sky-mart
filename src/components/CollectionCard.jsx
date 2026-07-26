import React from "react";
import { ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/cart";
import { useNavigate } from "react-router";

const CollectionCard = ({ item }) => {
  
    const dispatch = useDispatch()
    const navigate = useNavigate();

  return (
    <div className=" p-4 group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl duration-300">
      
      {/* Image */}
      <div className="relative overflow-hidden h-95 bg-gray-100 p-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 duration-500"
        />

        
        
      </div >

     
      <div className="">
        <span className="text-xs uppercase tracking-widest text-gray-500">
          {item.category}
        </span>

        <h2 className="text-xl font-bold mt-2 line-clamp-1">
          {item.title}
        </h2>

        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-bold">
            ${item.price}
          </span>

          <button onClick={()=>{
            dispatch(addToCart(item))
            navigate("/cart")
          }} className="px-4 py-2 rounded-lg bg-black text-white hover:bg-zinc-800 duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;