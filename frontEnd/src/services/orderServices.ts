import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoint_URL } from "./endPoint";
import api from "./api";

export const placeOrder = createAsyncThunk(
  `${EndPoint_URL.ORDER}/placeOrder`,
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await api.post(`${EndPoint_URL.ORDER}`, data);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const getUserOrderHistory = createAsyncThunk(
  `${EndPoint_URL.ORDER}/GetUserOrders`,
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get(`${EndPoint_URL.ORDER}`);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);
