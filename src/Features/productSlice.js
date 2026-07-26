import { createSlice } from "@reduxjs/toolkit";
import  DummyData  from "../assets/data/DummyData";

export const productSlice = createSlice({
    name:"products",
    initialState:{
          filteredProducts:JSON.parse(localStorage.getItem('filteredData')) || [],
    },

    reducers:{
      filteredProducts(state,action){
        try {
            const filter = DummyData.filter(
               (product)=>{
                return product.category === action.payload}
            );
            console.log(filter);
            
            state.filteredProducts = filter;
            localStorage.setItem( "filteredData",JSON.stringify(filter));
        } catch (error) {
            return error
        }
      }
    }
})

export const {filteredProducts} = productSlice.actions;
export default productSlice.reducer;