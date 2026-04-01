"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AuthErrorCard } from "@/components/errors/AuthErrorCard";
import { BUSINESS_NAME } from "@/lib/business-info";
import { type VideoRecord } from "@/lib/video-types";
import { useProtectedSession } from "@/components/watch/useProtectedSession";
import { getCachedVideos } from "@/lib/client-video-cache";

function WatchContent() {
  const { access } = useAuth();
  const { loggingOut, handleManualLogout } = useProtectedSession();
  const [videos, setVideos] = useState<VideoRecord[]>([]);
  const [videosLoading, setVideosLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    setVideosLoading(true);

    void getCachedVideos()
      .then((response) => {
        if (!cancelled) {
          setVideos(response);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setVideos([]);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setVideosLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const ownedVideos = useMemo(() => {
    const owned = new Set(access.videos);
    return videos.filter((video) => owned.has(video.slug));
  }, [access.videos, videos]);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_45%,#fff5ef_100%)] pt-6 text-slate-900 sm:pt-8"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] bg-white px-5 py-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:px-8"
        >
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.16em] text-slate-500">
              {BUSINESS_NAME}
            </p>
            <p className="mt-2 text-base font-medium leading-7 text-slate-600 md:text-lg">
              כאן מחכים לך כל השיעורים שכבר רכשת.
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              השיעורים שלי
            </h1>
          </div>

          {videosLoading ? (
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {Array.from({ length: Math.max(access.videos.length, 1) }).map(
                (_, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm"
                  >
                    <div className="aspect-[16/10] animate-pulse bg-slate-200" />
                    <div className="space-y-3 px-5 py-4">
                      <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
                      <div className="h-7 w-40 animate-pulse rounded bg-slate-200" />
                      <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
                      <div className="h-4 w-3/4 animate-pulse rounded bg-slate-100" />
                    </div>
                  </div>
                ),
              )}
            </div>
          ) : (
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {ownedVideos.map((video) => (
                <Link
                  key={video.id}
                  href={`/watch/${video.slug}`}
                  className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 text-right shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-slate-950">
                    <video
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      src={video.previewUrl}
                      muted
                      playsInline
                      autoPlay
                      loop
                      preload="metadata"
                    />
                  </div>
                  <div className="space-y-2 px-5 py-4">
                    <p className="text-sm font-semibold tracking-[0.16em] text-slate-500">
                      {video.level}
                    </p>
                    <h2 className="text-2xl font-black tracking-tight text-slate-900">
                      {video.title}
                    </h2>
                    <p className="text-sm leading-6 text-slate-600">
                      {video.description}
                    </p>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-emerald-600">
                      לצפייה בשיעור
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!videosLoading && !ownedVideos.length ? (
            <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50 px-6 py-8 text-center">
              <p className="text-lg font-semibold text-slate-700">
                עדיין אין שיעורים זמינים בחשבון הזה.
              </p>
            </div>
          ) : null}

          <div dir="ltr" className="mt-8 flex justify-start">
            <button
              type="button"
              onClick={() => void handleManualLogout()}
              disabled={loggingOut}
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(5,150,105,0.22)] transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loggingOut ? "מתנתק" : "התנתקות"}
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default function Watch() {
  const { access } = useAuth();

  return (
    <ProtectedRoute>
      {access.videos.length > 0 ? (
        <WatchContent />
      ) : (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
          <div className="w-full max-w-xl">
            <AuthErrorCard
              title="אין גישה"
              message="כדי לצפות בשיעור הזה צריך להשלים רכישה."
            />
          </div>
        </div>
      )}
    </ProtectedRoute>
  );
}
