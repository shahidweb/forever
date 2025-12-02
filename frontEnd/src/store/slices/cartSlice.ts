import { createSlice } from "@reduxjs/toolkit";
import {
  addUpdateCartItems,
  deleteCartItems,
  fetchAllCartItems,
} from "../../services/cartServices";
import type { IProduct } from "../../shared/types/interfaces";

export interface ICartItems {
  productId: IProduct;
  size: string;
  quantity: number;
}

interface CartState {
  items: ICartItems[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllCartItems.fulfilled, (state, action) => {
      state.items = action.payload || [];
    });
    builder.addCase(addUpdateCartItems.fulfilled, (state, action) => {
      state.items = action.payload || [];
    });
    builder.addCase(deleteCartItems.fulfilled, (state, action) => {
      state.items = action.payload || [];
    });
  },
});

export default cartSlice.reducer;
