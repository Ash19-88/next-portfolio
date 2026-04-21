"use client";
import { projects, Project } from "@/utils/projects";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const t = useTranslations("Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id={t("projects")}
      className="w-full text-white bg-[#0a0a0c] py-32 font-Raleway"
    >
      <div className="max-w-screen-lg mx-auto px-8 sm:px-4">
       {/* HEADER RESPONSIVE */}
        <div className="mb-24 md:mb-32 text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-slate-600 bg-clip-text text-transparent inline-block pb-4 leading-tight">
            {t("projects")}
          </h2>
          {/* Línea responsive: centrada en móvil, a la izquierda en laptop */}
          <div className="h-1 w-20 md:w-24 bg-cyan-500 shadow-[0_0_15px_#22d3ee] mb-8"></div>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-light tracking-wide leading-relaxed">
            {t("projectsSubtitle")}
          </p>
        </div>

        <div className="space-y-48">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col gap-16 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              {/* LADO VISUAL: Con el glow blanco neutro del logo */}
              <div
                className="w-full md:w-3/5 group cursor-pointer relative"
                onClick={() => setSelectedProject(project)}
              >
                {/* Glow de fondo (Blanco/Neutro como el logo) */}
                <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={1200}
                    height={700}
                    className="object-cover w-full h-auto transform transition-all duration-1000 group-hover:scale-105 brightness-[0.8] group-hover:brightness-110"
                  />
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>

                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="px-5 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white text-xs font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {t("viewDetails").toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>

              {/* LADO INFO: Estética limpia y tipográfica */}
              <div className="w-full md:w-2/5 space-y-8">
                <div className="space-y-2">
                  <span className="text-cyan-500 font-mono text-xs tracking-[0.4em] uppercase font-bold">
                    0{index + 1}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none">
                    {t(`${project.translationKey}.title`)}
                  </h3>
                </div>

                <p className="text-slate-400 text-lg leading-relaxed font-light border-l border-white/10 pl-6">
                  {t(`${project.translationKey}.shortDescription`)}
                </p>

                {/* Tech Stack: Bordes con glow sutil */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono font-bold tracking-widest text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 hover:border-cyan-500/40 hover:text-cyan-400 transition-all hover:cursor-pointer duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group relative px-10 py-4 bg-white text-black rounded-full overflow-hidden font-black text-xs tracking-[0.2em] transition-transform active:scale-95"
                  >
                    <span className="relative z-10">
                      {t("explore").toUpperCase()}
                    </span>
                    <div className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          t={t}
        />
      )}
    </section>
  );
};

export default Projects;
