'use client';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-orange-200 transition-all"
  >
    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-orange-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-rose-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative h-[600px] w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            {/* Placeholder for professional portrait */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-3xl font-bold text-white mb-1">John Doe</h3>
              <p className="text-orange-300 font-medium tracking-wide uppercase text-sm">World Champion Dancer</p>
            </div>
          </div>
        </motion.div>
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-slate-900">
              Dance is More Than <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">Just Steps.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              It's about expression, connection, and rhythm. With over 15 years of experience on international stages, I've developed a unique teaching method that simplifies complex movements into natural flow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Step-by-Step" 
              description="Learn at your own pace with detailed breakdowns of every movement." 
            />
            <FeatureCard 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title="Energy & Flow" 
              description="Master the art of musicality and dynamic expression." 
            />
          </div>

          <div className="flex gap-8 pt-6 border-t border-slate-200">
            <div>
              <span className="block text-4xl font-bold text-slate-900">15+</span>
              <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Years Exp</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-slate-900">10k+</span>
              <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Students</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-slate-900">4.9</span>
              <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
