// cartSlice.js - Manages the cart state using Redux Toolkit

import { createSlice } from '@reduxjs/toolkit';

// Initial state for cart

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const exists = state.cartItems.find(p => p.id === item.id);
      if (exists) {
        exists.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    // Remove product from cart
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },

     // Update product quantity
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(p => p.id === id);
      if (item) item.quantity = quantity;
    }
  },
});

// Export actions and reducer
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
