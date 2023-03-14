import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/BasketSlice";
import restauarantReducer from "./features/RestauarantSlice";
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restauarant: restauarantReducer,
  },
});
