import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      if (state.items[item.id]) {
        state.items[item.id].quantity += 1;
      } else {
        state.items[item.id] = { ...item, quantity: 1 };
      }
      console.log("Cart state after adding:", JSON.parse(JSON.stringify(state.items)));
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
