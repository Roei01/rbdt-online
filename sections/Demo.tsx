"use client";
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#fff4ef] py-24 text-slate-900"
    >
      <div className="absolute inset-0">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-left"
        >
          <span className="mb-5 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 shadow-sm">
            Studio Tools
          </span>
          <h2 className="mb-8 text-5xl font-black leading-[0.9] text-slate-900 md:text-7xl">
            Not Your
            <br />
            Average
            <br />
            Online
            <br />
            Tutorial
          </h2>
          <p className="max-w-lg text-xl font-medium leading-snug text-slate-600 md:text-2xl">
            Our custom tools make your online learning experience just like a
            class at a physical studio – but better.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12">
            {[
              {
                icon: "📷",
                title: "Camera Mode",
                desc: "Use your webcam as a virtual mirror",
              },
              {
                icon: "🪞",
                title: "Switch Views",
                desc: "Watch from front or back",
              },
              {
                icon: "⏱️",
                title: "Control Speed",
                desc: "Play video at whatever tempo works for you",
              },
              {
                icon: "🔁",
                title: "Loop Moves",
                desc: "Play any section on repeat",
              },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 text-left">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-3xl shadow-md">
                  {feature.icon}
                </span>
                <div>
                  <h4 className="mb-1 text-sm font-bold uppercase tracking-wider text-slate-800">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-tight text-slate-500">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Video Frame */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-[0_30px_80px_rgba(15,23,42,0.14)] transition-transform duration-500 hover:rotate-0 md:-rotate-2">
            <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-slate-900">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/p1MMaEHyIq8?rel=0&modestbranding=1"
              title="Dance Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>

            {/* UI Overlay Elements */}
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700 shadow-md backdrop-blur">
              Dance Preview
            </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-6 top-8 -z-10 h-full w-full rounded-[2rem] border border-blue-100/80 bg-white/40 transform rotate-6" />
        </motion.div>
      </div>
    </section>
  );
};

export { Demo };
