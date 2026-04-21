"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

interface NavLink {
  id: number;
  sectionId: string;
  displayName: string;
}

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("NavBar");
  const router = useRouter();

  // Cerrar el dropdown de idiomas al hacer clic fuera
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      if (
        menuRef.current &&
        isOpen &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu as EventListener);

    return () => {
      document.removeEventListener("mousedown", closeMenu as EventListener);
    };
  }, [isOpen]);

  // Cambiar el idioma
  const changeLanguage = (locale: string) => {
    router.push(`/${locale}`);
    setIsOpen(false);
  };

  const links: NavLink[] = [
    { id: 1, sectionId: t("home"), displayName: t("home") },
    { id: 2, sectionId: t("about"), displayName: t("about") },
    { id: 3, sectionId: t("projects"), displayName: t("projects") },
    { id: 4, sectionId: t("experience"), displayName: t("experience") },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-6 bg-[#0a0a0c]/80 text-white fixed top-0 z-50 border-b border-white/5 backdrop-blur-xl">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute w-7 h-7 bg-white/10 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-700"></div>
          <div className="absolute inset-[-2px] bg-white/5 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative w-10 h-10 transition-all duration-500 group-hover:scale-110">
            <Image
              src="/portfolio_logo.png"
              alt="Logo"
              fill
              sizes="40px"
              className="object-contain brightness-110 contrast-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] transition-all"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-bold tracking-tighter leading-none text-white group-hover:text-cyan-50 group-transition-colors">
            AYELEN{" "}
            <span className="text-slate-400 group-hover:text-white transition-colors">
              LLAMPA
            </span>
          </h1>
          <p className="text-[9px] text-cyan-400 font-mono tracking-[0.3em] uppercase group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">
            Frontend Developer
          </p>
        </div>
      </div>
      {/* Menú desktop */}
      <ul className="hidden md:flex items-center gap-2">
        {links.map(({ sectionId, displayName, id }) => (
          <li key={id} className="relative group">
            <Link
              href={`#${sectionId}`}
              className="px-4 py-2 text-md font-medium text-slate-400 hover:text-white transition-colors duration-300"
            >
              {displayName}
            </Link>
            {/* Underline animado estilo glow */}
            <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 shadow-[0_0_8px_#22d3ee]"></span>
          </li>
        ))}

        {/* Selector de Idioma con Glassmorphism */}
        <div ref={menuRef} className="relative ml-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold hover:bg-white/10 hover:border-cyan-500/50 transition-all"
          >
            {t("changeLanguage")}
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-3 w-40 bg-zinc-950/90 border border-white/10 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
              {["en", "es"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className="w-full px-5 py-3 text-left text-sm hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors capitalize font-medium"
                >
                  {lang === "en" ? t("english") : t("spanish")}
                </button>
              ))}
            </div>
          )}
        </div>
      </ul>
      {/* Menú móvil */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-[60] text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#0a0a0c] text-white z-[55] space-y-8">
          {links.map(({ sectionId, displayName, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-2 text-3xl font-bold text-slate-100 hover:text-cyan-400 duration-200"
            >
              <Link
                href={`#${sectionId}`}
                scroll={true}
                onClick={() => setNav(false)}
              >
                {displayName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
