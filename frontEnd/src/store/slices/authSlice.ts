import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../services/authServices";
import { decodeToken } from "../../shared/utils/decodeToken";

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
  exp: number;
}

interface AuthState {
  user: IUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const getCurrentUsers = () => {
  const token = localStorage.getItem("token") || "null";
  return token ? decodeToken(token) : null;
};

const initialState: AuthState = {
  user: getCurrentUsers(),
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(registerUser.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      const { token } = action.payload.data;
      state.token = token;
      state.user = decodeToken(token);
      localStorage.setItem("token", token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
