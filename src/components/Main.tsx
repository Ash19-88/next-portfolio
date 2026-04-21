import { useTranslations } from "next-intl";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

const Main = () => {
  const t = useTranslations("Main");

  return (
    <section
      id={t("home")}
      className="w-full min-h-screen flex justify-center items-center font-Raleway bg-zinc-950 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-center items-center md:h-full px-4 md:flex-row gap-8 z-10">
        
        {/* TEXT CONTENT */}
        <div className="flex flex-col justify-center h-full py-10 md:py-20 text-center md:text-left z-20 md:w-3/5">
          <h2 className="text-4xl sm:text-6xl font-bold bg-gradient-to-br from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            {t("homeTitle")}
          </h2>
          <span className="text-cyan-200/90 py-6 max-w-md font-medium tracking-wide text-lg mx-auto md:mx-0">
            {t("homeSubtitle")}
          </span>
          <div className="mt-4">
            <Link
              href={`#${t("projects")}`}
              scroll={true}
              className="group relative z-30 inline-flex items-center px-8 py-4 my-2 font-semibold tracking-widest text-white rounded-xl overflow-hidden transition-all duration-300 bg-zinc-900 border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                {t("projects")}
                <span className="group-hover:rotate-90 duration-300 text-cyan-400">
                  <BsFillArrowRightCircleFill size={25} />
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="relative pt-10 md:pt-0 flex justify-center items-center md:w-2/5 flex-shrink-0">
          <div className="absolute inset-0 z-0 bg-cyan-950/20 blur-3xl opacity-50 rounded-full scale-110"></div>
          <div className="relative z-10 mask-radial-fade w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 aspect-square overflow-hidden">
            <Image
              src="/my_avatar.jpeg"
              alt="Ayelen Llampa - Frontend Developer Avatar"
              fill 
              priority={true}
              className="object-cover object-top h-full w-full"
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
            />
          </div>

          <div className="absolute -inset-2 z-0 rounded-full border border-purple-900/10 scale-105 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Main;
