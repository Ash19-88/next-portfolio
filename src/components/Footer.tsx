import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillPersonLinesFill, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const t = useTranslations("Footer");
  const tNav = useTranslations("NavBar");
  const year = new Date().getFullYear();

  const menuLinks = [
    { id: 1, sectionId: tNav("home"), displayName: tNav("home") },
    { id: 2, sectionId: tNav("about"), displayName: tNav("about") },
    { id: 3, sectionId: tNav("projects"), displayName: tNav("projects") },
    { id: 4, sectionId: tNav("experience"), displayName: tNav("experience") },
  ];

  return (
    <footer className="w-full bg-zinc-950 bg-gradient-to-t from-black to-zinc-950 border-t border-white/5 pt-20 pb-10 font-Raleway">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMNA 1: LOGO Y SUBTÍTULO */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="relative w-8 h-8">
                <Image 
                  src="/portfolio_logo.png" 
                  alt="Logo" 
                  fill 
                  className="object-contain brightness-110 contrast-125" 
                />
              </div>
              <span className="text-white font-bold tracking-tighter text-xl uppercase">
                Ayelen <span className="text-slate-500 transition-colors hover:text-white cursor-default">Llampa</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm md:text-base max-w-xs leading-relaxed text-center md:text-left mx-auto md:mx-0 font-light">
              {t("footerSubtitle")}
            </p>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN DINÁMICA */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase font-bold opacity-80">Menú</h4>
            <ul className="space-y-4 text-sm font-medium">
              {menuLinks.map((link) => (
                <li key={link.id}>
                  <Link 
                    href={`#${link.sectionId}`}
                    className="text-slate-400 hover:text-cyan-400 transition-all duration-300 capitalize"
                  >
                    {link.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: SOCIAL */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-cyan-500 font-mono text-sm tracking-[0.3em] uppercase font-bold opacity-80">Social</h4>
            <div className="flex gap-6 justify-center md:justify-start text-slate-400">
              <a 
                href="https://github.com/Ash19-88" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white hover:scale-110 transition-all"
              >
                <BsGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ayelen-llampa1988/" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white hover:scale-110 transition-all"
              >
                <BsLinkedin size={24} />
              </a>
              <a 
                href="/Ayelen-Llampa-resume.pdf" 
                download={true} 
                className="hover:text-cyan-400 hover:scale-110 transition-all"
                title="Download Resume"
              >
                <BsFillPersonLinesFill size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR REFINADA */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono tracking-[0.2em] text-slate-600 uppercase text-center md:text-left">
          <p>© {year} {t("copyright")} | <span className="hover:text-slate-400 transition-colors">All rights reserved</span></p>
          <p className="flex items-center gap-2">
            {t("developedBy")} 
            <span className="text-slate-200 border-b border-cyan-500/30">Ayelen Llampa</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;