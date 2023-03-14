import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Toast } from "react-native-toast-message/lib/src/Toast";
const initialState = {
  items: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product: ${action.payload.name} as its not in basket`
        );
      }
      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
export const selectItemsById = createSelector(
  [(state) => state.basket.items, (state, id) => id],
  (items, id) => items.filter((item) => item.id === id)
);
export const selectedBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);
export default basketSlice.reducer;
