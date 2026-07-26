import { configureStore, createReducer } from "@reduxjs/toolkit";
import productreducer  from "../Features/productSlice";
import authreducer from "../Features/Auth";
import shopReducer from "../Features/ShopProductSlice";
import cartreducer  from "../Features/cart";

export const store = configureStore({
  reducer: {
    product: productreducer,
    auth: authreducer,
    shop:shopReducer,
    cart:cartreducer,

  },
 
});