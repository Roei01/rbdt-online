import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Music2, Youtube } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-pink-200/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-black uppercase tracking-tighter leading-[0.9] text-slate-900 md:text-7xl lg:text-8xl"
          >
            Reach Your
            <br />
            Dance Goals
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xl text-lg font-medium leading-relaxed text-slate-600 md:text-2xl"
          >
            Learn modern dance, expression, musicality, and stage confidence
            through a premium class experience designed to feel inspiring and
            alive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center"
          >
            <button
              onClick={() =>
                document
                  .getElementById("purchase")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-2xl bg-blue-600 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-blue-700"
            >
              Start Dancing Now
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative hidden h-full md:flex items-start justify-end"
        >
          <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl" />
          <div className="relative flex w-full max-w-[42rem] items-start justify-end gap-6 pt-2">
            <div className="relative z-10 w-[17rem] rounded-3xl border border-white/80 bg-white/95 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Follow
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.youtube.com/@rotembaruch5608"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-red-50 px-4 py-3 text-sm font-semibold text-slate-800 transition-all hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md"
                >
                  <span>YouTube</span>
                  <Youtube className="h-4 w-4 text-red-500" />
                </a>
                <a
                  href="https://www.instagram.com/rotembaruch._?igsh=MWZncmEwOGplcXQ1aw=="
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-pink-50 px-4 py-3 text-sm font-semibold text-slate-800 transition-all hover:-translate-y-0.5 hover:border-pink-200 hover:shadow-md"
                >
                  <span>Instagram</span>
                  <Instagram className="h-4 w-4 text-pink-500" />
                </a>
                <a
                  href="https://www.tiktok.com/@rotembaruch._?_r=1&_t=ZS-94Y4j0FFIKl"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                >
                  <span>TikTok</span>
                  <Music2 className="h-4 w-4 text-slate-700" />
                </a>
                <a
                  href="https://www.facebook.com/share/1C3eYuVg5M/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-blue-50 px-4 py-3 text-sm font-semibold text-slate-800 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <span>Facebook</span>
                  <Facebook className="h-4 w-4 text-blue-600" />
                </a>
              </div>
            </div>

            <div className="relative w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop"
                  alt="Dancer portrait"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/75 via-slate-900/10 to-transparent p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100">
                    Featured Instructor
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    Rotem Baruch
                  </h3>
                  <p className="mt-1 text-sm text-white/85">
                    Replace this image with your own hero dancer photo for a
                    fully branded look.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
