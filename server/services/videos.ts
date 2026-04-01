import { Video, type IVideo } from "../../models/Video";
import { type VideoRecord } from "../../lib/video-types";
import {
  DEFAULT_VIDEO_DESCRIPTION,
  DEFAULT_VIDEO_ID,
  DEFAULT_VIDEO_IMAGE_URL,
  DEFAULT_VIDEO_LEVEL,
  DEFAULT_VIDEO_PLAYER_URL,
  DEFAULT_VIDEO_PREVIEW_URL,
  DEFAULT_VIDEO_PRICE_ILS,
  DEFAULT_VIDEO_SLUG,
  DEFAULT_VIDEO_TITLE,
} from "../../lib/catalog";

const DEFAULT_VIDEO_SEED = {
  slug: DEFAULT_VIDEO_SLUG,
  title: DEFAULT_VIDEO_TITLE,
  description: DEFAULT_VIDEO_DESCRIPTION,
  price: DEFAULT_VIDEO_PRICE_ILS,
  level: DEFAULT_VIDEO_LEVEL,
  videoUrl: DEFAULT_VIDEO_PLAYER_URL,
  previewUrl: DEFAULT_VIDEO_PREVIEW_URL,
  imageUrl: DEFAULT_VIDEO_IMAGE_URL,
  isActive: true,
};

const serializeVideo = (video: IVideo): VideoRecord => ({
  id: String(video._id),
  slug: video.slug,
  title: video.title,
  description: video.description,
  price: video.price,
  level: video.level,
  videoUrl: video.videoUrl,
  previewUrl: video.previewUrl,
  imageUrl: video.imageUrl || DEFAULT_VIDEO_IMAGE_URL,
  isActive: video.isActive,
});

export const normalizeOwnedVideoId = (videoId: string) => {
  return videoId === DEFAULT_VIDEO_ID ? DEFAULT_VIDEO_SLUG : videoId;
};

export const getPurchaseVideoId = (video: Pick<IVideo, "slug">) => {
  return video.slug === DEFAULT_VIDEO_SLUG ? DEFAULT_VIDEO_ID : video.slug;
};

export const getAcceptedPurchaseVideoIds = (slug: string) => {
  if (slug === DEFAULT_VIDEO_SLUG) {
    return [DEFAULT_VIDEO_ID, DEFAULT_VIDEO_SLUG];
  }

  return [slug];
};

export const ensureDefaultVideoExists = async () => {
  await Video.findOneAndUpdate(
    { slug: DEFAULT_VIDEO_SLUG },
    { $setOnInsert: DEFAULT_VIDEO_SEED },
    { upsert: true, new: true },
  );

  await Video.findOneAndUpdate(
    {
      slug: DEFAULT_VIDEO_SLUG,
      $or: [{ imageUrl: { $exists: false } }, { imageUrl: "" }],
    },
    { $set: { imageUrl: DEFAULT_VIDEO_IMAGE_URL } },
  );
};

export const listActiveVideos = async () => {
  await ensureDefaultVideoExists();

  const videos = await Video.find({ isActive: true }).sort({ createdAt: 1 });
  return videos.map(serializeVideo);
};

export const getActiveVideoBySlug = async (slug: string) => {
  await ensureDefaultVideoExists();

  const video = await Video.findOne({ slug, isActive: true });
  return video ? serializeVideo(video) : null;
};
