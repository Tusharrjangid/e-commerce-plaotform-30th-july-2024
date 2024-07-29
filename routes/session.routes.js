import { Router } from "express";
import { getLoginSession, loginSession } from "../controllers/session.js";
import authenticate from "../utils/Authenticate.js";

const router = Router();

router.post("/loginSession", loginSession);
router.get("/getLoginSession", authenticate, getLoginSession);

export default router;
