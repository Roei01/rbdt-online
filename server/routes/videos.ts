import express from "express";
import { getActiveVideoBySlug, listActiveVideos } from "../services/videos";

const router = express.Router();

router.get("/", async (_req, res) => {
  const videos = await listActiveVideos();
  return res.json(videos);
});

router.get("/:slug", async (req, res) => {
  const video = await getActiveVideoBySlug(req.params.slug);

  if (!video) {
    return res.status(404).json({
      code: "VIDEO_UNAVAILABLE",
      message: "Video not found.",
    });
  }

  return res.json(video);
});

export default router;
