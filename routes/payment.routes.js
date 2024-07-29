import { payment } from "../controllers/payment.js";
import { Router } from "express";
import authorization from "../utils/Authenticate.js";

const router = Router();

router.post("/payment", authorization, payment);

export default router;
