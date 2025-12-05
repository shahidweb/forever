import { Router } from "express";
import {
  getAllOrders,
  getUserOrders,
  placeOrder,
  updateOrderStatus,
} from "../controllers/order.controller";
import { auth } from "../middlewares/auth";
import { isAdmin } from "../middlewares/admin.middleware";

const router = Router();
router.get("/", auth, getUserOrders);
router.post("/", auth, placeOrder);
router.get("/allOrder", auth, isAdmin, getAllOrders);
router.patch("/update-status/:orderId", auth, isAdmin, updateOrderStatus);

export default router;
