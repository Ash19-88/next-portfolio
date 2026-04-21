import { useTranslations } from "next-intl";
import Image from "next/image";

const About = () => {
  const t = useTranslations("About");

  return (
    <section
      id={t("about")}
      className="w-full min-h-screen font-Raleway py-32 bg-black overflow-hidden relative"
    >
      {/* Luces de fondo sutiles */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>
      <div className="max-w-screen-lg px-8 sm:px-4 mx-auto relative z-10">
        {/* Header estilo Experience */}
        <div className="mb-20 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-slate-500 bg-clip-text text-transparent inline-block pb-4 tracking-tight">
            {t("about")}
          </h2>
          <div className="h-1 w-20 md:w-24 bg-cyan-500 shadow-[0_0_15px_#22d3ee] mb-8"></div>
        </div>
        {/* Main Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* TEXTO */}
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-6 text-slate-300 text-lg md:text-xl leading-relaxed font-light">
              <p className="text-white font-semibold text-2xl md:text-3xl leading-snug">
                {t("hi")}
              </p>
              <p>{t("techs")}</p>
              <p>{t("ux")}</p>
              <p className="text-slate-500 border-l-2 border-purple-500/30 pl-6 italic text-base md:text-lg">
                {t("background")}
              </p>
            </div>
          </div>
          {/* TERMINAL WIDGET */}
          <div className="md:col-span-5 flex justify-center">
            <div className="group relative w-full max-w-sm rounded-3xl overflow-hidden border border-white/10 bg-zinc-950/50 backdrop-blur-xl p-8 flex flex-col min-h-[350px] transition-all duration-500 hover:border-cyan-500/30 shadow-2xl">
              {/* Browser Dots */}
              <div className="flex gap-2 mb-10">
                <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500 transition-colors cursor-pointer"></div>
              </div>
              {/* Terminal Content */}
              <div className="space-y-8 font-mono text-xs md:text-sm relative z-10">
                <div className="space-y-2">
                  <p className="text-cyan-500 opacity-80">{">"} ayelen.role</p>
                  <p className="text-white pl-4 italic">{t("role")}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-purple-400 opacity-80">
                    {">"} ayelen.focus
                  </p>
                  <p className="text-white pl-4 tracking-tighter">
                    {t("focus")}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-emerald-400 opacity-80">
                    {">"} ayelen.status
                  </p>
                  <p className="text-white pl-4">{t("status")}</p>
                </div>
              </div>
              {/* Logo sutil decorativo de fondo */}
              <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
                <Image
                  src="/portfolio_logo.png"
                  alt=""
                  width={180}
                  height={180}
                />
              </div>
              <div className="mt-auto pt-6 opacity-20">
                <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-white">
                  System.Initialized
                </p>
              </div>
              {/* Glow de fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
