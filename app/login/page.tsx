'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post('/api/auth/login', { username, password });
      router.push('/watch');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden text-left">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-slate-800 p-12 rounded-2xl shadow-2xl border border-slate-700 relative z-10"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black tracking-tight text-white mb-2">Log In</h1>
          <p className="text-slate-400 text-sm font-medium">Welcome back, dancer.</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-5 py-4 bg-slate-700 border border-slate-600 text-white focus:border-blue-500 focus:outline-none transition-colors rounded-xl font-medium"
              placeholder="YOUR USERNAME"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 bg-slate-700 border border-slate-600 text-white focus:border-blue-500 focus:outline-none transition-colors rounded-xl font-medium"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-900/20 border border-red-500/20 text-red-400 text-xs font-bold tracking-wide text-center rounded-lg"
            >
              {error}
            </motion.div>
          )}

          <button
            disabled={loading}
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg rounded-xl"
          >
            {loading ? 'Verifying...' : 'Log In'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
