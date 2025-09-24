import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(item => item.id === plant.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
      
      state.totalItems += 1;
      state.totalPrice += plant.price;
    },
    
    removeFromCart: (state, action) => {
      const plantId = action.payload;
      const existingItem = state.items.find(item => item.id === plantId);
      
      if (existingItem) {
        state.totalItems -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter(item => item.id !== plantId);
      }
    },
    
    increaseQuantity: (state, action) => {
      const plantId = action.payload;
      const existingItem = state.items.find(item => item.id === plantId);
      
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += existingItem.price;
      }
    },
    
    decreaseQuantity: (state, action) => {
      const plantId = action.payload;
      const existingItem = state.items.find(item => item.id === plantId);
      
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        state.totalItems -= 1;
        state.totalPrice -= existingItem.price;
        state.items = state.items.filter(item => item.id !== plantId);
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
