import { Router } from "express";
import { signUpSchema } from "../models/signUpSchema.js";
import validateSchema from "../middlewares/validateSchema.js";
import { signUpValidation, signInValidation } from "../middlewares/authMiddleware.js";
import { signIn, signUp } from "../controllers/authController.js";

const router = Router();
router.post("/signup", validateSchema(signUpSchema), signUpValidation, signUp);
router.post("/signin", signInValidation, signIn);

export default router;