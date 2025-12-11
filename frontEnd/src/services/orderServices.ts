import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";
import { EndPoint_URL } from "./endPoint";

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

export const razorPayOrder = async (data: any) => {
  try {
    const res = await api.post(`${EndPoint_URL.PAYMENT}`, data);
    return res.data;
  } catch (error: any) {
    return error.response?.data?.message;
  }
};

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

export const allOrderHistory = createAsyncThunk(
  `${EndPoint_URL.ORDER}/allOrder`,
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get(`${EndPoint_URL.ORDER}/allOrder`);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  `${EndPoint_URL.ORDER_Update_Status}/updatedStatus`,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await api.patch(
        `${EndPoint_URL.ORDER_Update_Status}/${payload.orderId}`,
        {
          status: payload.status,
        }
      );
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);
