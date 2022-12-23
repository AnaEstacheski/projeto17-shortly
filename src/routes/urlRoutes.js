import { Router } from "express";
import { sendShortenedUrl } from "../controllers/urlController.js";
import { authValidation } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/urls/shorten", authValidation, sendShortenedUrl);
router.get("/urls/:id");
router.get("/urls/open/:shortUrl");
router.delete("/urls/:id");

export default router;