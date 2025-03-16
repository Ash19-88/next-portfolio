import { logos } from "@/utils/logos";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";


const Experience = () => {
  const  t  = useTranslations("Experience");

  return (
    <div
      id={t("experience")}
      className="w-full h-full font-Raleway"
    >
      <div className="max-w-screen-lg mx-auto p-4 lg:px-20 flex flex-col justify-center w-full text-white">
        <div className="pt-20 lg:pt-16 2xl:pt-32">
          <p className="text-2xl md:text-4xl font-bold border-b-4 border-slate-400 px-2 pb-2 inline ">
            {t("experience")}
          </p>
          <p className="pt-4 pb-0 md:pt-8 text-xl md:text-2xl">
            {t("experienceSubtitle")}
          </p>
        </div>

        <div
          className="w-full grid grid-cols-3 gap-5 sm:grid-cols-4 sm:gap-8 text-center py-6
        px-0 md:gap-10 md:py-10"
        >
          {logos.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 pt-2 duration-500 rounded-lg ${style}`}
            >
              <Image src={src} alt={title} className="w-6 mx-auto sm:w-14" width={500}
            height={300} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
