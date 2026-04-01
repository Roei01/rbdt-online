"use client";

import { api } from "@/lib/api-client";
import { type VideoRecord } from "@/lib/video-types";

let videosCache: VideoRecord[] | null = null;
let videosPromise: Promise<VideoRecord[]> | null = null;

const videoBySlugCache = new Map<string, VideoRecord>();
const videoBySlugPromise = new Map<string, Promise<VideoRecord>>();

export const getCachedVideos = async () => {
  if (videosCache) {
    return videosCache;
  }

  if (!videosPromise) {
    videosPromise = api.get<VideoRecord[]>("/videos").then((response) => {
      videosCache = response.data;
      for (const video of response.data) {
        videoBySlugCache.set(video.slug, video);
      }
      return response.data;
    }).finally(() => {
      videosPromise = null;
    });
  }

  return videosPromise;
};

export const getCachedVideoBySlug = async (slug: string) => {
  const cachedVideo = videoBySlugCache.get(slug);
  if (cachedVideo) {
    return cachedVideo;
  }

  const cachedVideos = videosCache?.find((video) => video.slug === slug);
  if (cachedVideos) {
    videoBySlugCache.set(slug, cachedVideos);
    return cachedVideos;
  }

  const existingPromise = videoBySlugPromise.get(slug);
  if (existingPromise) {
    return existingPromise;
  }

  const promise = api.get<VideoRecord>(`/videos/${slug}`).then((response) => {
    videoBySlugCache.set(slug, response.data);
    return response.data;
  }).finally(() => {
    videoBySlugPromise.delete(slug);
  });

  videoBySlugPromise.set(slug, promise);
  return promise;
};

export const clearClientVideoCache = () => {
  videosCache = null;
  videosPromise = null;
  videoBySlugCache.clear();
  videoBySlugPromise.clear();
};
