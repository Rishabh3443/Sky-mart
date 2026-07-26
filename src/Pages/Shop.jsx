import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from "../Features/ShopProductSlice";
import { addToCart  } from "../Features/cart";
import { useNavigate } from 'react-router';



const Shop = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const {  filteredProducts,search } = useSelector(
    state => state.shop
);

console.log(filteredProducts);


  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 lg:px-10 py-10">
      
      {/* Header & Search Section (UI Only) */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <h1 className="text-4xl font-black uppercase tracking-wide">All Products</h1>
        
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <input 
            type="text" 
            value={search}
            onChange={(e)=>
        dispatch(searchProducts(e.target.value))
    }
            placeholder="Search for products..." 
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all bg-white"
          />
          <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex flex-col gap-3 group">
            
            {/* Image Container with Hover Overlay */}
            <div className="relative overflow-hidden h-80 rounded-xl bg-white border border-gray-200 shadow-sm cursor-pointer p-6 flex justify-center items-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
              />
              
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button onClick={()=>{
            dispatch(addToCart(product));
            navigate("/cart");
          }}  className="bg-black text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition-colors shadow-lg cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col mt-2">
              <p className="text-gray-900 font-semibold text-sm line-clamp-1">
                {product.title}
              </p>
              <p className="text-gray-500 text-xs mt-1 capitalize">{product.category}</p>
              <p className="text-black font-bold text-lg mt-1">${product.price}</p>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
};

export default Shop;