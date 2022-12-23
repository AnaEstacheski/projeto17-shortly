import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import { signUpSchemaValidation, signInValidation } from "../middlewares/authMiddleware.js";

const router = Router();
router.post("/signup", signUpSchemaValidation, signUp);
router.post("/signin", signInValidation, signIn);

export default router;