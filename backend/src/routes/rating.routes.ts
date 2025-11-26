import { Router } from "express";
import { auth } from "../middlewares/auth";
import { addRating } from "../controllers/rating.controller";

const router = Router();

router.post("/:productId", auth, addRating);

export default router;
