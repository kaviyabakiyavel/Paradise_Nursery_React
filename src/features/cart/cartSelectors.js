export const selectCartItems = state => Object.values(state.cart.items);

export const selectCartCount = (state) =>
  Object.values(state.cart.items).reduce((total, item) => total + item.quantity, 0);