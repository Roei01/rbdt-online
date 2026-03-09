"use client";
import { motion } from "framer-motion";

const Styles = () => {
  const categories = [
    {
      name: "Modern Dance",
      image:
        "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1000",
      description: "Expression, flow, technique, and emotional movement.",
      featured: true,
    },
    {
      name: "Freestyle",
      image:
        "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1000",
      description: "Freedom, rhythm, and personal style on every beat.",
    },
    {
      name: "Hip Hop",
      image:
        "https://images.unsplash.com/photo-1545959570-a92672efaf69?q=80&w=1000",
      description: "Groove, musicality, and strong foundational movement.",
    },
    {
      name: "Contemporary",
      image:
        "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1000",
      description: "Creative choreography with softness, power, and control.",
    },
    {
      name: "Breaking",
      image:
        "https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?q=80&w=1000",
      description: "Dynamic tricks, footwork, and explosive energy.",
    },
    {
      name: "Popping",
      image:
        "https://images.unsplash.com/photo-1616428787766-3d2b270b213c?q=80&w=1000",
      description: "Sharp hits, precision, and controlled isolations.",
    },

    {
      name: "Ballet",
      image:
        "https://images.unsplash.com/photo-1519925610903-38106302d58d?q=80&w=1000",
      description: "Posture, grace, discipline, and technical foundation.",
    },
  ];

  return (
    <section
      id="styles"
      className="py-24 bg-slate-50 relative overflow-hidden text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-none text-slate-900">
            Learn A Variety
            <br /> of Dance Styles
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Explore multiple genres with a strong focus on modern dance,
            expression, technique, and stage presence.
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
              <div
                className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-1 bg-white ${
                  style.featured
                    ? "ring-2 ring-blue-500 shadow-xl md:col-span-2"
                    : "shadow-sm hover:shadow-xl"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${style.image})` }}
                />
                <div
                  className={`absolute inset-0 transition-colors duration-300 ${
                    style.featured
                      ? "bg-gradient-to-t from-blue-950/70 via-blue-900/10 to-transparent"
                      : "bg-black/0 group-hover:bg-black/10"
                  }`}
                />
                {style.featured && (
                  <div className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    Featured
                  </div>
                )}
              </div>

              <h3
                className={`mt-4 text-sm md:text-base font-bold transition-colors tracking-wide text-center ${
                  style.featured
                    ? "text-blue-700"
                    : "text-slate-900 group-hover:text-blue-600"
                }`}
              >
                {style.name}
              </h3>
              <p className="mt-1 text-center text-sm text-slate-500 max-w-xs">
                {style.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Styles };
