import { Router } from "express";
import { auth } from "../middlewares/auth";
import { addCart, deleteCart } from "../controllers/cart.controller";

const router = Router();
router.post("/", auth, addCart);
router.delete("/", auth, deleteCart);

export default router;
