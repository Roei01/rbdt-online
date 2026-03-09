'use client';
import { motion } from 'framer-motion';

const Styles = () => {
  return (
    <section id="styles" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 text-center mb-12"
        >
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2 block">Curriculum</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">What You'll Master</h2>
        </motion.div>

        {[
          { name: 'Salsa', desc: 'Rhythm & Flow', color: 'from-orange-400 to-red-400', img: 'https://images.unsplash.com/photo-1516708754805-728b248a8677?q=80&w=1000' },
          { name: 'Bachata', desc: 'Sensuality & Connection', color: 'from-rose-400 to-pink-400', img: 'https://images.unsplash.com/photo-1545696968-1a5245650b91?q=80&w=1000' },
          { name: 'Technique', desc: 'Body Isolation', color: 'from-amber-400 to-orange-400', img: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=1000' },
          { name: 'Styling', desc: 'Musicality & Expression', color: 'from-teal-400 to-cyan-400', img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000' },
        ].map((style, i) => (
          <motion.div
            key={style.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${style.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10`} />
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${style.img})` }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-0" />
            
            <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl font-bold text-white mb-1 drop-shadow-md">{style.name}</h3>
              <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                {style.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export { Styles };
