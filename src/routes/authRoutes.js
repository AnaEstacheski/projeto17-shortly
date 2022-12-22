import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import { signUpSchemaValidation } from "../middlewares/authMiddleware.js";

const router = Router();
router.post("/signup", signUpSchemaValidation, signUp);
router.post("/signin", signIn);

export default router;