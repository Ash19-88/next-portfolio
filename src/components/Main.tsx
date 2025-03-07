import { useTranslations } from "next-intl";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

const Main = () => {
  const t = useTranslations("Main");

  return (
    <section
      id={t("home")}
      className="h-full md:min-h-screen flex justify-center items-center font-Raleway "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse justify-center items-center md:h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full py-10 md:mx-16">
          <h2 className="text-4xl sm:text-6xl font-bold text-white ">
            {t("homeTitle")}
          </h2>
          <span className="text-slate-300 py-4 max-w-md font-medium tracking-widest">
            {t("homeSubtitle")}
          </span>
          <div>
            <Link
              href={`#${t("projects")}`}
              scroll={true}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-[0.8px] border-slate-500 font-semibold cursor-pointer tracking-widest"
            >
              {t("projects")}
              <span className="ml-2 group-hover:rotate-90 duration-300">
                <BsFillArrowRightCircleFill size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className="pt-24">
          <Image
            src="/myphoto.png"
            alt="Foto profile"
            width={500}
            height={300} 
            className="mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
