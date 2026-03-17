"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Clock3 } from "lucide-react";

type StyleCard = {
  name: string;
  image: string;
  description?: string;
  featured?: boolean;
  muted?: boolean;
  comingSoon?: boolean;
  href?: string;
  cta?: string;
  mediaClassName?: string;
  imageClassName?: string;
};

const categories: StyleCard[] = [
  {
    name: "השיעור הפעיל",
    image:
      "https://res.cloudinary.com/ddcdws24e/image/upload/f_auto,q_auto,w_1200/IMG_2051_sx4gm5",
    featured: true,
    href: "/modern-dance",
    description: "מחול מודרני עם שילוב של נוכחות, זרימה, טכניקה והבעה.",
    cta: "לצפייה בפרטי השיעור",
    mediaClassName: "aspect-[5/6] sm:aspect-[16/10] lg:aspect-[4/5]",
    imageClassName:
      "object-cover object-bottom transition duration-500 group-hover:scale-105",
  },
  {
    name: "שיעורים מלאים נוספים",
    image:
      "https://res.cloudinary.com/ddcdws24e/image/upload/f_auto,q_auto,w_1200/addition_qzopu3",
    muted: true,
    comingSoon: true,
    description:
      "שיעורים באורך של 15-30 דקות של כוראוגרפיות מלאות מוכרות וגם חדשות!",
    mediaClassName: "aspect-[12/10]",
    imageClassName: "object-cover object-bottom grayscale opacity-80",
  },
] as const;

export const Styles = () => {
  return (
    <section
      id="styles"
      className="relative overflow-hidden bg-slate-50 pt-2 pb-5 text-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mx-auto max-w-2xl text-xl font-medium text-slate-600">
            מאז שהתחלתי לרקוד, חלמתי לחלוק את התשוקה שלי עם כולם.
            <br />
            לאורך השנים, הרבה תלמידים ביקשו ללמוד את הכוריאוגרפיות שלי,
            <br />
            אבל לא תמיד יכולתי להגיע אליהם.
            <br />
            הגיע הזמן לתת לכולם את ההזדמנות לרקוד איתי, בקצב שלכם,
            <br />
            בכל מקום ובכל זמן.
            <br />
            בשם השם נעשה ונצליח. 🙏🏻
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {categories.map((style, i) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={style.featured ? "lg:row-span-2" : ""}
            >
              {style.href ? (
                <Link
                  href={style.href}
                  className="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)]"
                >
                  <div
                    className={`relative ${style.mediaClassName ?? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]"}`}
                  >
                    <Image
                      src={style.image}
                      alt={style.name}
                      fill
                      className={
                        style.imageClassName ??
                        "object-cover object-bottom transition duration-500 group-hover:scale-105"
                      }
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                    <div className="absolute right-4 top-4 rounded-full bg-[#f2cf88] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-950 shadow-lg">
                      עכשיו באתר
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-7 sm:p-6">
                      <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 text-right backdrop-blur-md">
                        {" "}
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f2cf88]">
                          שיעור מלא זמין
                        </p>
                        <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                          אהבת השם - 20 דק'
                        </h3>
                        <p className="mt-3 max-w-md text-sm font-medium leading-6 text-white/90 sm:text-base">
                          שיעור מודרני פיוז׳ן לשיר אהבת השם
                          <br />
                          של בן צור. (רמת בינוני מתקדמים)
                        </p>
                        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition group-hover:bg-white/20">
                          <span>{style.cta}</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                  <div
                    className={`relative ${style.mediaClassName ?? "aspect-[16/10]"}`}
                  >
                    <Image
                      src={style.image}
                      alt={style.name}
                      fill
                      className={
                        style.imageClassName ??
                        "object-cover object-bottom grayscale opacity-60"
                      }
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-slate-950/45" />

                    <div className="absolute inset-x-0 top-4 flex justify-center">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/85 px-4 py-2 text-xs font-bold text-slate-700 shadow-lg backdrop-blur">
                        <Clock3 className="h-4 w-4" />
                        <span>יעלה בקרוב</span>
                      </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <div className="rounded-[1.5rem] border border-white/10 bg-black/15 p-5 text-right backdrop-blur-sm">
                        <h3 className="text-xl font-black tracking-tight text-white md:text-2xl">
                          {style.name}
                        </h3>
                        <p className="mt-3 text-sm font-medium leading-6 text-white/85">
                          {style.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
