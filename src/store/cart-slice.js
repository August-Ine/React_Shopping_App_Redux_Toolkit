import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartIsShowing: true,
  cartItems: [],
  isChanged: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCartIsShowing(state) {
      state.cartIsShowing = !state.cartIsShowing;
    },
    replaceCart(state, action) {
      state.cartItems = action.payload || [];
    },
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.total + existingItem.price;
        state.isChanged = true;
      } else {
        state.cartItems.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
          total: action.payload.price
        });
        state.isChanged = true;
      }
    },
    removeItemFromCart(state, action) {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (cartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== cartItem.id
        );
        state.isChanged = true;
      } else {
        cartItem.quantity--;
        cartItem.total = cartItem.total - cartItem.price;
        state.isChanged = true;
      }
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
