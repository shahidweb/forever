import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth";
import { ERoleType } from "../utils/enums";

export const isAdmin = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.role !== ERoleType.ADMIN) {
    return res.status(403).json({ message: "Access denied. Admin only." });
  }
  next();
};
