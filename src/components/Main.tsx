import { useTranslations } from "next-intl";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

const Main = () => {
  const t = useTranslations("Main");

  return (
    <section
      id={t("home")}
      className="h-full md:min-h-screen flex justify-center items-center font-Raleway"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-center items-center md:h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full py-10 md:mx-16">
          <h2 className="text-4xl sm:text-6xl z-20 font-bold text-white ">
            {t("homeTitle")}
          </h2>
          <span className="text-slate-300 py-4 max-w-md font-medium tracking-widest">
            {t("homeSubtitle")}
          </span>
          <div>
            <Link
              href={`#${t("projects")}`}
              scroll={true}
              className="group relative z-30 inline-flex items-center px-6 py-3 my-2 font-semibold tracking-widest text-white rounded-md overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                {t("projects")}
                <span className="ml-2 group-hover:rotate-90 duration-300">
                  <BsFillArrowRightCircleFill size={25} />
                </span>
              </span>

              <span className="absolute inset-0 rounded-md border border-slate-500"></span>

              <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-border"></span>
            </Link>
          </div>
        </div>
        <div className="pt-24">
          <div className="absolute inset-0 z-10 bg-pink-500 blur-3xl opacity-20 rounded-full"></div>
          <Image
            src="/myphoto.png"
            alt="Photo profile"
            width={500}
            height={300}
            className="relative z-20 mx-auto w-2/3 md:w-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
