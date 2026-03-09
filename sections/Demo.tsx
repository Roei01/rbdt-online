'use client';
import { motion } from 'framer-motion';

export const Demo = () => {
  return (
    <section id="demo" className="py-32 bg-slate-50 text-center relative">
      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-rose-50 text-rose-500 text-sm font-semibold tracking-widest uppercase mb-6 border border-rose-100">
            Preview
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Watch the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Magic</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            A sneak peek into the high-quality production and clear instruction style you'll experience.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group bg-white"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder&controls=0&rel=0" // Use a real video ID
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          ></iframe>
          
          {/* Custom Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <div className="w-24 h-24 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center pl-2 border border-white shadow-xl text-orange-500">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-current border-b-[15px] border-b-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
