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
      //console.log("Cart state after adding:", JSON.parse(JSON.stringify(state.items)));
      //JSON.stringify(state.items) - This converts the Proxy object into a JSON string
      //JSON.parse(...) This turns that JSON string back into a regular object.
    },
    increaseQuantity: (state, action) => {
      state.items[action.payload].quantity++;
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      if (state.items[id].quantity > 1) state.items[id].quantity--;
      else delete state.items[id];
    },
    removeItem: (state, action) => { delete state.items[action.payload]; }
  }
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
