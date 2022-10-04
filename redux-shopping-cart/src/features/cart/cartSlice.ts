import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CartState {
  items: {
    [id: string]: number;
  };
}

const initialState: CartState = {
  items: {},
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

export function getNumItems(state: RootState) {
  console.log("hello");
  let numItems = 0;
  for (let id in state.cart.items) {
    numItems += state.cart.items[id];
  }
  return numItems;
}

export const getMemorizedNumItems = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    console.log("calling getMemorizedNumItems");
    let numItems = 0;
    for (let id in items) {
      numItems += items[id];
    }
    return numItems;
  }
);
