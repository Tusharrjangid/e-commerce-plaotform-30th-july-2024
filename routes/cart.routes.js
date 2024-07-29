import { Router } from "express";
import { addToCart, getCart } from "../controllers/cart.js";
import authenticate from "../utils/Authenticate.js";

const router = Router();

router.post("/cart", authenticate, addToCart);
router.get("/cart", authenticate, getCart);

export default router;
