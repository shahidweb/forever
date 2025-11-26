import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProductById,
  updateProduct,
} from "../controllers/product.controller";
import { isAdmin } from "../middlewares/admin.middleware";
import { auth } from "../middlewares/auth";
import upload from "../middlewares/upload";

const router = Router();

router.get("/", getProduct);
router.get("/:id", getProductById);

//Admin Routes;

router.post("/", auth, isAdmin, upload.array("images", 5), addProduct);
router.put("/:id", auth, isAdmin, updateProduct);
router.delete("/:id", auth, isAdmin, deleteProduct);

export default router;
