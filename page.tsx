import Image from "next/image";
import { Hero } from "@/components/hero";
import { Profile } from "@/components/profile";
import { LessonPlans } from "@/components/lesson-plans";
import { Schedule } from "@/components/schedule";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff0f5] to-white text-stone-600 selection:bg-pink-200 selection:text-pink-900">
      <Hero />
      <Profile />
      <LessonPlans />
      <Schedule />
      <Contact />

      <footer className="w-full py-6 text-center text-stone-400 text-xs border-t border-pink-100">
        <p>&copy; {new Date().getFullYear()} Mayumi Saeki Flute Studio. All rights reserved.</p>
        <p className="mt-1">Designed by Antigravity</p>
      </footer>
    </main>
  );
}
