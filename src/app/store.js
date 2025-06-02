import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice';
import { loadState, saveState } from '../utils/localStorage';

const persistedCart = loadState(); // load previous cart from localStorage

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: persistedCart, // use it as initial state
  },
});

store.subscribe(() => {
  saveState(store.getState().cart); // update localStorage on every cart change
});


export default store;