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
    <section id="purchase" className="py-32 bg-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-rose-50 text-rose-500 text-sm font-semibold tracking-widest uppercase mb-4 border border-rose-100">
            Limited Offer
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Start Your Journey <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
              Today.
            </span>
          </h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Get instant access to the complete masterclass. 
            Stream anytime, anywhere, on any device.
          </p>
          
          <ul className="space-y-4 text-slate-700">
            {['Lifetime Access', 'Full HD Video Quality', 'Mobile Friendly', 'Money Back Guarantee'].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-2xl space-y-8"
        >
          <div className="absolute top-0 right-0 p-4">
             <div className="bg-gradient-to-r from-orange-500 to-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 origin-bottom-left">
               BEST VALUE
             </div>
          </div>
          
          <div className="text-center">
            <p className="text-slate-500 uppercase tracking-widest text-sm mb-2">One-time Payment</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl font-black text-slate-900">$49</span>
              <span className="text-slate-400 text-xl line-through">$99</span>
            </div>
          </div>

          <form onSubmit={handlePurchase} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-slate-600 ml-1">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all hover:bg-white"
              />
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm text-center"
              >
                {error}
              </motion.div>
            )}
            
            {success && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-green-50 border border-green-100 rounded-lg text-green-600 text-sm text-center"
              >
                Redirecting to secure checkout...
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-bold rounded-xl text-lg shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              <span className="relative z-10">{loading ? 'Processing...' : 'Get Access Now'}</span>
              {loading && <Loader2 className="w-5 h-5 animate-spin relative z-10" />}
            </motion.button>
          </form>
          
          <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-100 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="text-xs text-slate-500 flex gap-2">
               <span>🔒 Secure SSL Encryption</span>
               <span>•</span>
               <span>💳 All Major Cards Accepted</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
