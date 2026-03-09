import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-100/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center lg:text-left"
        >
          <span className="inline-block py-2 px-4 rounded-full bg-orange-50 text-orange-600 text-sm font-bold tracking-wide uppercase border border-orange-100">
            Premium Online Course
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-slate-900">
            Move With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
              Confidence.
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Join world-champion <span className="font-semibold text-slate-900">John Doe</span>. 
            Learn the secrets of rhythm, style, and expression in a step-by-step masterclass designed for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg shadow-lg hover:bg-slate-800 transition-colors"
            >
              Start Dancing Now
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold text-lg hover:bg-slate-50 transition-colors shadow-sm"
            >
              <span>Watch Trailer</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16"/></svg>
            </motion.button>
          </div>
          
          <div className="pt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
              ))}
            </div>
            <p>Join 10,000+ happy students</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <div className="absolute inset-0 bg-slate-200 animate-pulse" />
            {/* Replace with actual image */}
            <img 
              src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1000&auto=format&fit=crop" 
              alt="Dancer in motion" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="font-bold text-lg">"Dance is the hidden language of the soul."</p>
              <p className="text-sm opacity-80 mt-2">— Martha Graham</p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-400 rounded-full blur-xl opacity-50" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-rose-400 rounded-full blur-xl opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};
