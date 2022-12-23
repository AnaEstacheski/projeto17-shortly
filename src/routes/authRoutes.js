import { Router } from "express";

// Schemas
import { signUpSchema } from "../models/signUpSchema.js";
// Middleware/Validations
import validateSchema from "../middlewares/validateSchema.js";
import { signUpValidation, signInValidation } from "../middlewares/authMiddleware.js";
// Controllers
import { signIn, signUp } from "../controllers/authController.js";

//Routes
const router = Router();
router.post("/signup", validateSchema(signUpSchema), signUpValidation, signUp);
router.post("/signin", signInValidation, signIn);

export default router;