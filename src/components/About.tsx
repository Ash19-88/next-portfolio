import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <section id={t("about")} className="w-full min-h-screen font-Raleway py-24">
      <div className="max-w-screen-lg w-auto py-10 md:px-20 lg:px-24 px-8 mx-auto">
        {/* Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white border-b-4 border-slate-500 inline-block pb-2">
            {t("about")}
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* TEXT */}
          <div className="md:col-span-3 space-y-6 text-white">
            <p className="text-lg md:text-xl font-semibold">{t("hi")}</p>

            <p className="text-lg md:text-xl text-slate-300">{t("techs")}</p>

            <p className="text-lg md:text-xl text-slate-300">{t("ux")}</p>

            <p className="text-lg md:text-xl text-slate-400">
              {t("background")}
            </p>
          </div>

          {/* SMALLER ANIMATED WIDGET */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm h-48 rounded-xl border border-slate-700 overflow-hidden bg-black/40 backdrop-blur-sm p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 blur-2xl"></div>
              <div className="relative h-full overflow-hidden">
                <div className="absolute animate-scrollText space-y-4 text-slate-300 text-sm tracking-widest">
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
