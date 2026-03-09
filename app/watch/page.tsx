'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Watch() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Basic auth check simulation
    const checkAuth = async () => {
      try {
        // Assume authenticated for MVP or check cookie via API
        setLoading(false);
      } catch (err) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  const handleVideoError = () => {
    setError('Access denied. Please login again.');
    setTimeout(() => router.push('/login'), 2000);
  };

  if (loading) return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-orange-100/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex flex-col md:flex-row justify-between items-end gap-4"
        >
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-2 block">Premium Course</span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Master Dance Tutorial</h1>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-slate-500 text-sm">Progress: 0%</p>
            <div className="w-32 h-1 bg-slate-200 rounded-full mt-2 overflow-hidden">
              <div className="w-0 h-full bg-orange-500" />
            </div>
          </div>
        </motion.div>
        
        {error ? (
          <div className="bg-red-50 border border-red-100 p-6 rounded-xl text-center text-red-600 backdrop-blur-md">
            {error}
          </div>
        ) : (
          <motion.div 
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group"
          >
            <video
              className="w-full h-full object-contain"
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              onError={handleVideoError}
              src="/api/video/stream/video_001"
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Watermark / Protection Overlay */}
            <div className="absolute top-6 right-6 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full border border-white/20 text-[10px] text-slate-600 uppercase tracking-widest pointer-events-none select-none opacity-50 group-hover:opacity-100 transition-opacity">
              Protected Content • {new Date().getFullYear()}
            </div>
          </motion.div>
        )}

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Course Overview</h2>
            <p className="text-slate-600 leading-relaxed font-light">
              Welcome to the complete masterclass. In this video, we will cover the fundamental techniques required to build a strong foundation. 
              Please ensure you have adequate space to move and follow along with the warm-up section before attempting complex moves.
            </p>
            
            <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Key Learning Points</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                {['Body Isolation Techniques', 'Rhythm & Timing', 'Footwork Drills', 'Musicality', 'Partner Connection', 'Styling & Expression'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Instructor</h3>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-rose-400" />
              <div>
                <p className="font-bold text-slate-900">John Doe</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">World Champion</p>
              </div>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
              <p className="text-orange-800 text-sm font-medium mb-2">Need Help?</p>
              <p className="text-orange-600/80 text-xs mb-4">Having trouble with a specific move? Reach out to our support team.</p>
              <button className="w-full py-2 bg-white hover:bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider rounded-lg border border-orange-200 transition-all shadow-sm">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
