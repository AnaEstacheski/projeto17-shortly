import { Router } from "express";
import { urlSchema } from "../models/urlSchema.js";
import validateSchema from "../middlewares/validateSchema.js";
import { sendShortenedUrl } from "../controllers/urlController.js";
import { authValidation } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/urls/shorten", authValidation, validateSchema(urlSchema), sendShortenedUrl);
router.get("/urls/:id");
router.get("/urls/open/:shortUrl");
router.delete("/urls/:id");

export default router;