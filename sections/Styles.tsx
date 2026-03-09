'use client';
import { motion } from 'framer-motion';

const Styles = () => {
  const categories = [
    { 
      name: 'Freestyle', 
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1000', 
    },
    { 
      name: 'Hip Hop', 
      image: 'https://images.unsplash.com/photo-1545959570-a92672efaf69?q=80&w=1000', 
    },
    { 
      name: 'Contemporary', 
      image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1000', 
    },
    { 
      name: 'Breaking', 
      image: 'https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?q=80&w=1000', 
    },
    { 
      name: 'Popping', 
      image: 'https://images.unsplash.com/photo-1616428787766-3d2b270b213c?q=80&w=1000', 
    },
    { 
      name: 'K-Pop', 
      image: 'https://images.unsplash.com/photo-1627483262268-9c96d8a36896?q=80&w=1000', 
    },
    { 
      name: 'Jazz Funk', 
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000', 
    },
    { 
      name: 'Ballet', 
      image: 'https://images.unsplash.com/photo-1519925610903-38106302d58d?q=80&w=1000', 
    },
  ];

  return (
    <section id="styles" className="py-24 bg-slate-50 relative overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-none text-slate-900">
            Learn A Variety<br/> of Dance Styles
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Master the fundamentals and advanced techniques across multiple genres.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((style, i) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 bg-white">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${style.image})` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <h3 className="mt-4 text-sm md:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-wide text-center">
                {style.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Styles };
