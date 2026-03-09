'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import axios from 'axios';

export const Purchase = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/purchase/create', {
        email,
      });

      if (response.data.checkoutUrl) {
        window.location.href = response.data.checkoutUrl;
      } else {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="purchase" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/60 py-24 text-slate-900">
      <div className="absolute inset-0">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-pink-100/60 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 space-y-6 text-left"
        >
          <span className="mb-4 inline-block rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700">
            Special Offer
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-slate-900">
            Unlimited<br/>
            Access<br/>
            Pass
          </h2>
          <p className="max-w-lg text-xl font-medium leading-snug text-slate-600 md:text-2xl">
            Get instant access to the complete masterclass. Stream anytime, anywhere, on any device.
          </p>
          
          <ul className="mt-8 space-y-3 font-medium text-slate-600">
            {['1500+ Online Classes', '10+ Beginner Programs', '150+ Top Instructors'].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-md">✓</div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 p-10 text-center shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-orange-200 blur-[100px] opacity-70" />
          
          <div className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">One-time Payment</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-7xl font-black tracking-tighter text-slate-900">₪180</span>
              <span className="text-2xl font-bold text-slate-400 line-through decoration-2 decoration-rose-400">₪360</span>
            </div>
          </div>

          <form onSubmit={handlePurchase} className="space-y-4">
            <div className="space-y-1 text-left">
              <label htmlFor="email" className="ml-1 block text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-medium text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-400 focus:outline-none"
              />
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-red-200 bg-red-50 p-3 text-center text-xs font-bold uppercase tracking-wide text-red-500"
              >
                {error}
              </motion.div>
            )}
            
            {success && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-center text-xs font-bold uppercase tracking-wide text-emerald-600"
              >
                Redirecting to payment...
              </motion.div>
            )}

            <button
              disabled={loading}
              className="relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-slate-900 py-5 text-lg font-black text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-700"
            >
              <span className="relative z-10">{loading ? 'Processing...' : 'Get Started'}</span>
              {loading && <Loader2 className="w-5 h-5 animate-spin relative z-10" />}
            </button>
          </form>
          
          <div className="mt-6 flex justify-center gap-4 transition-all duration-300">
             <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Secure Payment</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
