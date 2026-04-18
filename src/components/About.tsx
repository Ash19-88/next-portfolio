import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <section id={t("about")} className="w-full min-h-screen font-Raleway py-24 bg-zinc-950">
      <div className="max-w-screen-lg w-auto py-10 md:px-20 lg:px-24 px-8 mx-auto">
        {/* Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block pb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t("about")}
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2"></div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* TEXT */}
          <div className="md:col-span-3 space-y-6 text-white">
            <p className="text-lg md:text-xl font-semibold text-cyan-100">{t("hi")}</p>
            <p className="text-lg md:text-xl text-cyan-200/80">{t("techs")}</p>
            <p className="text-lg md:text-xl text-cyan-200/70">{t("ux")}</p>
            <p className="text-lg md:text-xl text-purple-200/60">
              {t("background")}
            </p>
          </div>
          {/* SMALLER ANIMATED WIDGET */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm h-48 rounded-xl glow-border overflow-hidden bg-zinc-900/60 backdrop-blur-md p-6">
              {/* Degradado de fondo interno */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-600/20 to-cyan-500/20 blur-2xl opacity-70"></div>
              <div className="relative h-full overflow-hidden z-10">
                <div className="absolute animate-scrollText space-y-4 text-cyan-100/90 text-sm tracking-widest font-mono">
                  <p> Frontend Developer</p>
                  <p>React • Next.js • TypeScript</p>
                  <p>UI & Performance</p>
                  <p>Clean Architecture</p>
                  <p>Remote Collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
