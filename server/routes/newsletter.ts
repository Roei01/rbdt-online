import express from "express";
import { z } from "zod";
import { NewsletterSubscriber } from "../../models/NewsletterSubscriber";
import { newsletterRateLimiter } from "../middleware/rateLimit";
import { logger } from "../lib/logger";

const router = express.Router();

const newsletterSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
});

router.post("/subscribe", newsletterRateLimiter, async (req, res) => {
  try {
    const validation = newsletterSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        code: "VALIDATION_ERROR",
        message: "נא להזין כתובת אימייל תקינה.",
      });
    }

    const { email } = validation.data;
    const existingSubscriber = await NewsletterSubscriber.findOne({ email });

    if (existingSubscriber) {
      return res.json({
        ok: true,
        alreadySubscribed: true,
        message: "כתובת האימייל הזו כבר רשומה לדיוור.",
      });
    }

    await NewsletterSubscriber.create({
      email,
      source: "footer",
    });

    return res.status(201).json({
      ok: true,
      message: "נרשמת בהצלחה לדיוור.",
    });
  } catch (error) {
    logger.error("Newsletter subscribe error:", error);

    return res.status(500).json({
      code: "INTERNAL_ERROR",
      message: "לא הצלחנו להשלים את ההרשמה כרגע. נסי שוב.",
    });
  }
});

export default router;
