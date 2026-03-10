import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Music2, Youtube } from "lucide-react";
import heroImage from "@/server/assets/IMG_5427.png";

const socialLinks = [
  {
    href: "https://www.tiktok.com/@rotembaruch._?_r=1&_t=ZS-94Y4j0FFIKl",
    label: "TikTok",
    icon: Music2,
  },
  {
    href: "https://www.instagram.com/rotembaruch._?igsh=MWZncmEwOGplcXQ1aw==",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.youtube.com/@rotembaruch5608",
    label: "YouTube",
    icon: Youtube,
  },
  {
    href: "https://www.facebook.com/share/1C3eYuVg5M/?mibextid=wwXIfr",
    label: "Facebook",
    icon: Facebook,
  },
];

export const Hero = () => {
  return (
    <section className="bg-[#f8f7f4] px-4 py-6 text-slate-900 sm:px-6 lg:px-10 lg:py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.10)]"
      >
        <div className="relative min-h-[78vh]">
          <Image
            src={heroImage}
            alt="Rotem Baruch dancing in studio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
          <div className="absolute inset-0 bg-black/15" />

          <div className="relative z-10 flex min-h-[78vh] items-end px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-14">
            <div className="max-w-xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75 sm:text-sm">
                Online Dance Training
              </p>
              <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Take Your Training
                <span className="block">To The Next Level.</span>
              </h1>
              <p className="mt-4 max-w-lg text-sm font-medium leading-6 text-white/80 sm:text-base">
                Minimal, focused, and clear. Learn modern dance with musicality,
                flow, and a class experience that feels powerful from the first move.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() =>
                    document
                      .getElementById("purchase")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-md bg-[#f3c969] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-[#e8bd57]"
                >
                  Start Dancing Now
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("demo")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="rounded-md border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white backdrop-blur transition hover:bg-white/20"
                >
                  Watch Preview
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-black/10 bg-white px-6 py-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Dance Training
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              Choreography, Seminars, Courses
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              Everything is designed to keep the hero cleaner and more premium,
              with one clear action that leads users to start dancing now.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
