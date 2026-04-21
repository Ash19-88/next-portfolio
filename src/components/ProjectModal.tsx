import React from 'react';
import Image from 'next/image';
import { IoClose } from "react-icons/io5";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "@/utils/projects";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  t: (key: string) => string; 
}

const ProjectModal = ({ project, onClose, t }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="absolute inset-0 bg-[#0a0a0c]/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-7xl h-fit max-h-[90vh] bg-[#111114] border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row">       
        <button onClick={onClose} className="absolute top-4 right-4 md:top-8 md:right-8 p-2 md:p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all z-50 border border-white/10 backdrop-blur-md hover:rotate-90">
          <IoClose size={20} className="md:w-6 md:h-6" />
        </button>
        {/* IZQUIERDA: Galería / Imagen */}
        <div className="w-full lg:w-3/5 bg-zinc-950 flex items-center justify-center p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="relative w-full h-full group flex items-center justify-center">
            <div className="absolute w-full h-full bg-white/5 blur-[60px] md:blur-[80px] rounded-full"></div>
            <Image 
              src={project.src} 
              alt={project.alt} 
              width={1200} height={800} 
              className="relative z-10 rounded-xl shadow-2xl object-contain max-h-[25vh] sm:max-h-[35vh] lg:max-h-[65vh] transition-transform duration-700"
              priority
            />
          </div>
        </div>
        {/* DERECHA: Información Técnica con Scrollbar Personalizado */}
        <div className="w-full lg:w-2/5 flex flex-col bg-[#0a0a0c]/50 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-14 space-y-8 md:space-y-10 custom-scrollbar pr-4 md:pr-6">
            <div className="space-y-4">
              <span className="text-cyan-400 font-mono text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase select-none cursor-default">
                Architecture & UX
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight select-none cursor-default">
                {t(`${project.translationKey}.title`)}
              </h2>
              <p className="text-slate-400 text-sm md:text-lg leading-relaxed font-light select-none cursor-default">
                {t(`${project.translationKey}.description`)}
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase select-none opacity-60 cursor-default">
                {t("techStack")}
              </h4>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.techStack?.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-white/5 text-slate-300 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-[10px] md:text-xs font-mono border border-white/10 cursor-default select-none hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Botones de acción */}
          <div className="p-6 md:p-10 border-t border-white/5 bg-[#0a0a0c] flex flex-col sm:flex-row gap-3 md:gap-4">
            <a 
              href={project.site} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 py-3 md:py-4 bg-white text-black hover:bg-cyan-400 rounded-2xl font-black transition-all active:scale-95 text-[10px] md:text-xs tracking-widest uppercase"
            >
              {t("livePreview")} <FaExternalLinkAlt size={12} />
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 py-3 md:py-4 bg-zinc-900 text-white border border-white/10 hover:border-cyan-500/50 rounded-2xl font-black transition-all active:scale-95 text-[10px] md:text-xs tracking-widest uppercase"
            >
              {t("sourceCode")} <FaGithub size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;