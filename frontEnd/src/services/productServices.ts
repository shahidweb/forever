import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";
import { EndPoint_URL } from "./endPoint";

export const fetchAllProductList = createAsyncThunk(
  `${EndPoint_URL.PRODUCT}/fetchAll`,
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get(`${EndPoint_URL.PRODUCT}`);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  `${EndPoint_URL.PRODUCT}/getone`,
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await api.get(`${EndPoint_URL.PRODUCT}/${id}`);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface IRatingPayload {
  productId: string;
  rating: number;
}

export const setProductRating = createAsyncThunk(
  `${EndPoint_URL.RATING}`,
  async (data: IRatingPayload, { rejectWithValue }) => {
    try {
      const res = await api.post(`${EndPoint_URL.RATING}/${data.productId}`, {
        rating: data.rating,
      });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  `${EndPoint_URL.PRODUCT}/delete`,
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await api.delete(`${EndPoint_URL.PRODUCT}/${id}`);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
