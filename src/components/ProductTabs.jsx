import { useDispatch, useSelector } from "react-redux";
import { filteredProducts } from "../Features/productSlice";
import ProductCard from "./ProductCard";
import { useRef } from "react";

const categories = [
  "Hoodie",
  "Caps & Bags",
  "Trending",
  "Out Wear",
  "Accessories",
];

const ProductTabs = () => {
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.product.filteredProducts);

    console.log(products);
    

  return (
    <>
      <div className="flex gap-3">
        {categories.map((category) => (
          <button
          
            key={category}
            onClick={() => dispatch(filteredProducts(category))}
            className=" ml-3 mt-7 active:bg-black px-6 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-6 mt-8">
  {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      
      
      
    />
    
  ) 
  )
  
  }
</div>
    </>
  );
};

export default ProductTabs;