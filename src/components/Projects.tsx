import { projects } from "@/utils/projects";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Projects = () => {
  const  t  = useTranslations("Projects");

  return (
    <div
      id={t("projects")}
      className="w-full text-white md:h-full font-Raleway"
    >
      <div className="max-w-screen-lg w-auto py-10 md:px-20 lg:px-24 px-8 mx-auto flex flex-col justify-center min-h-screen">
        <div className="pb-8 pt-20 md:pt-2">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-slate-400">
            {t("projects")}
          </p>
          <p className="py-6 md:pt-6 md:pb-1">{t("projectsSubtitle")}</p>
        </div>

        <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 sm:px-0">
          {projects.map(({ id, src, github, site, style, alt, width, height, translationKey, techStack }) => (
            <div key={id} className={`shadow-md rounded-xl ${style}`}>
                <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="rounded-xl duration-200 shadow-sm shadow-white hover:scale-105"
              />
              {/**Description container */}
              <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {t(`${translationKey}.title`)}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {t(`${translationKey}.description`)}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {techStack?.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-slate-700 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              <div className="flex flex-row items-center justify-center">
                <div>
                  <a href={site} target="_blank" rel="noopener noreferrer">
                    <button className="w-1/2 m-4 duration-200 hover:scale-125">
                      {t("demo")}
                    </button>
                  </a>
                </div>
                <div>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <button className="w-1/2 m-4 duration-200 hover:scale-125">
                      {t("code")}
                    </button>
                  </a>
                </div>
              
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
