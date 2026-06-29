import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolioData";

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-[#0D0D0D] overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <p className="text-sm text-gray-400 font-mono mb-2 tracking-widest uppercase">// skills</p>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold">Keahlian</h2>
          <div className="mt-4 w-16 h-0.5 bg-gray-900 dark:bg-white" />
        </div>
      </div>

      {/* Infinite Scroll Logo Ticker */}
      <div className="relative w-full overflow-hidden py-4 reveal">
        {/* Left and right gradient fade overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-[#0D0D0D] dark:via-[#0D0D0D]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-[#0D0D0D] dark:via-[#0D0D0D]/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-scroll flex items-center">
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 px-6 py-4 mx-4 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 transform hover:scale-105 select-none flex-shrink-0 cursor-pointer"
            >
              <img 
                /* Perubahan utama ada di baris bawah ini */
                src={skill.iconUrl || `https://cdn.simpleicons.org/${skill.slug}`} 
                alt={skill.name} 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  /* Ubah behavior error agar fallback ke gambar kosong/tidak langsung display none jika ingin mempertahankan layout */
                  e.target.style.display = "none";
                }}
              />
              <span className="font-grotesk font-semibold text-base text-gray-900 dark:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}