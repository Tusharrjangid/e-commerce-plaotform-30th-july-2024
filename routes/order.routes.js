import { Router } from "express";
import { getOrder, newOrder } from "../controllers/order.js";
import Authenticate from "../utils/Authenticate.js";

const router = Router();

router.post("/orders", Authenticate, newOrder);
router.get("/orders", Authenticate, getOrder);

export default router;
