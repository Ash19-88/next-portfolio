import { logos } from "@/utils/logos";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";

const Experience = () => {
  const t = useTranslations("Experience");

  return (
    <section
      id={t("experience")}
      className="w-full py-32 bg-[#0a0a0c] font-Raleway overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto px-8 sm:px-4">
        {/* Header */}
        <div className="mb-20 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-slate-600 bg-clip-text text-transparent inline-block pb-4">
            {t("experience")}
          </h2>
          <div className="h-1 w-20 md:w-24 bg-cyan-500 shadow-[0_0_15px_#22d3ee] mb-8"></div>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            {t("experienceSubtitle")}
          </p>
        </div>

        {/* Grid de Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {logos.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`group relative p-8 rounded-2xl bg-zinc-950/20 border border-white/5 transition-all duration-500 flex flex-col items-center justify-center hover:-translate-y-2 hover:bg-zinc-900/40 shadow-sm ${style} hover:shadow-2xl transition-shadow`}
            >
              {/* 3. Glow interno: Usamos 'currentColor' para que herede el color del shadow de la variable 'style' */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl rounded-2xl bg-current"></div>
              <div className="relative z-10 transition-all duration-500 group-hover:scale-110">
                <Image
                  src={src}
                  alt={title}
                  className="w-10 md:w-14 h-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  width={500}
                  height={300}
                  unoptimized
                />
              </div>

              <p className="mt-4 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-slate-500 group-hover:text-white transition-colors relative z-10">
                {title}
              </p>
              {/* Borde que se ilumina con el color del texto/shadow en hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
