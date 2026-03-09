'use client';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Styles } from '@/sections/Styles';
import { Demo } from '@/sections/Demo';
import { Purchase } from '@/sections/Purchase';
import { Footer } from '@/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Styles />
      <Demo />
      <Purchase />
      <Footer />
    </main>
  );
}
