import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.js";
import authenticate from "../utils/Authenticate.js";

const router = Router();

router.post("/createProduct", authenticate, createProduct);
router.get("/getProducts", getProducts);
router.put("/updateProduct/:id", authenticate, updateProduct);
router.delete("/deleteProduct/:id", authenticate, deleteProduct);

export default router;
