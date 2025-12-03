import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";
import { EndPoint_URL } from "./endPoint";

export const fetchAllCartItems = createAsyncThunk(
  `${EndPoint_URL.CART}/fetchAll`,
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get(`${EndPoint_URL.CART}`);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUpdateCartItems = createAsyncThunk(
  `${EndPoint_URL.CART}/addUpdateItem`,
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await api.post(`${EndPoint_URL.CART}`, data);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCartItems = createAsyncThunk(
  `${EndPoint_URL.CART}/deleteItem`,
  async ({ productId, size }: any, { rejectWithValue }) => {
    try {
      const res = await api.delete(`${EndPoint_URL.CART}`, {
        data: { productId, size },
      });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
