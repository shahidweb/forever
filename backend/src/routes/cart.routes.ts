import { Router } from "express";
import { auth } from "../middlewares/auth";
import { getCart, addCart, deleteCart } from "../controllers/cart.controller";

const router = Router();
router.get("/", auth, getCart);
router.post("/", auth, addCart);
router.delete("/", auth, deleteCart);

export default router;
