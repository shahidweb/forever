import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProductList,
  fetchProductById,
} from "../../services/productServices";
import type { IProduct } from "../../shared/types/interfaces";

interface ProdState {
  data: IProduct[];
  product: IProduct | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProdState = {
  data: [],
  product: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearProduct(state) {
      state.product = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllProductList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProductList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAllProductList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default productSlice.reducer;
