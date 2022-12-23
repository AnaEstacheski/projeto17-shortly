import { Router } from "express";

// Schemas
import { urlSchema } from "../models/urlSchema.js";
// Middleware/Validations
import { authValidation } from "../middlewares/authMiddleware.js";
import validateSchema from "../middlewares/validateSchema.js";
import { validateUrl, validateShortUrl, validateUrlDelete } from "../middlewares/urlMiddleware.js";
// Controllers
import { sendShortenedUrl, getUrl, redirectUser, deleteUrl, getUserInfo } from "../controllers/urlController.js";

//Routes
const router = Router();
router.post("/urls/shorten", authValidation, validateSchema(urlSchema), sendShortenedUrl);
router.get("/urls/:id", validateUrl, getUrl);
router.get("/urls/open/:shortUrl", validateShortUrl, redirectUser);
router.delete("/urls/:id", authValidation, validateUrlDelete, deleteUrl);
router.get("/users/me", authValidation, getUserInfo);
router.get("/ranking",);

export default router;