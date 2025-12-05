import { createSlice } from "@reduxjs/toolkit";
import {
  allOrderHistory,
  getUserOrderHistory,
  placeOrder,
  updateOrderStatus,
} from "../../services/orderServices";
import type { IOrder } from "../../shared/types/interfaces";

interface IOrderState {
  data: IOrder[];
  loading: boolean;
  error: string | null;
}

const initialState: IOrderState = {
  data: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(placeOrder.pending, (state) => {
      state.data = [];
      state.error = null;
      state.loading = true;
    });
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(placeOrder.rejected, (state, action) => {
      state.data = [];
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(getUserOrderHistory.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(allOrderHistory.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload.orders;
    });
    builder.addCase(updateOrderStatus.fulfilled, (state, action) => {
      state.error = null;
      state.loading = false;
      state.data = action.payload.orders;
    });
  },
});

export default orderSlice.reducer;
