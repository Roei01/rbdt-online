import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute w-full h-full object-cover opacity-50 blur-[2px]"
        >
          {/* Placeholder video - high energy street style */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-dancing-in-a-nightclub-4050-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
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
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] text-white"
          >
            Reach<br/>
            Your<br/>
            Dance<br/>
            Goals
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 font-medium max-w-lg leading-tight"
          >
            Learn from the best in the industry with hundreds of classes, programs, and advanced techniques.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-6"
          >
            <button 
              onClick={() => document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-xl"
            >
              Start Dancing Now
            </button>
            <p className="mt-4 text-sm text-gray-400 font-medium">
              Start Free For 7 Days
            </p>
          </motion.div>
        </motion.div>

        {/* Right side could be empty to show video or have a floating element */}
        <div className="hidden md:block relative h-full">
          {/* Decorative element mimicking the UI screenshot style */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
        </div>
      </div>
    </section>
  );
};
