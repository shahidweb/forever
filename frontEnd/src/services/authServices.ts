import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoint_URL } from "./endPoint";
import api from "./api";

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser extends ILoginUser {
  name: string;
}

export const registerUser = createAsyncThunk(
  `${EndPoint_URL.REGISTER}`,
  async (data: IRegisterUser, { rejectWithValue }) => {
    try {
      const res = await api.post(`${EndPoint_URL.REGISTER}`, data);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  `${EndPoint_URL.LOGIN}`,
  async (data: ILoginUser, { rejectWithValue }) => {
    try {
      const res = await api.post(`${EndPoint_URL.LOGIN}`, data);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);
