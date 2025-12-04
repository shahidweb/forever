import { Router } from "express";
import { getUserOrders, placeOrder } from "../controllers/order.controller";
import { auth } from "../middlewares/auth";

const router = Router();
router.get("/", auth, getUserOrders);
router.post("/", auth, placeOrder);

export default router;
