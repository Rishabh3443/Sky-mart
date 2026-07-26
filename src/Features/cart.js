import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

export const cart = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.cart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({
          ...product,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;

      const product = state.cart.find((item) => item.id === id);

      if (product) {
        product.quantity += 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;

      const product = state.cart.find((item) => item.id === id);

      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== id);
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      const id = action.payload;

      state.cart = state.cart.filter((item) => item.id !== id);

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cart.actions;

export default cart.reducer;