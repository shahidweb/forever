import express from "express";
import { createRazorpayOrder } from "../controllers/paymentController";

const router = express.Router();

router.post("/create-order", createRazorpayOrder);

export default router;
