import { jwtDecode } from "jwt-decode";

export interface DecodedToken {
  id: string;
  name: string;
  email: string;
  role: string;
  exp: number;
}

export const decodeToken = (token: string): DecodedToken | null => {
  try {
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    console.warn("Invalid token:", error);
    return null;
  }
};
