import { createSlice } from "@reduxjs/toolkit";
import  ShopData  from "../assets/data/ShopData";

const initialState = {
    products: ShopData,
    filteredProducts: ShopData,
    search: ""
};


const shopProductSlice = createSlice({

    name: "shop",

    initialState,

    reducers: {

    searchProducts: (state, action) => {

        state.search = action.payload;

        if(action.payload === ""){
            state.filteredProducts = state.products;
            return;
        }

        state.filteredProducts = state.products.filter((product)=>

            product.title
            .toLowerCase()
            .includes(action.payload.toLowerCase())

            ||

            product.category
            .toLowerCase()
            .includes(action.payload.toLowerCase())

        );

    }

}

});

export default shopProductSlice.reducer;

export const {
    searchProducts
} = shopProductSlice.actions;