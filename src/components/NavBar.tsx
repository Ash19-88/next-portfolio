"use client"; 

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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

  // Links de la NavBar
  const links: NavLink[] = [
    { id: 1, sectionId: t("home"), displayName: t("home") },
    { id: 2, sectionId: t("about"), displayName: t("about") },
    { id: 3, sectionId: t("projects"), displayName: t("projects") },
    { id: 4, sectionId: t("experience"), displayName: t("experience") },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white fixed">
      {/* Logo */}
      <div>
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-light font-signature ml-2">
          {t("title")}
        </h1>
      </div>

      {/* Menú desktop */}
      <ul className="hidden md:flex font-Raleway">
        {/* Dropdown de idiomas */}
        <div ref={menuRef} className="relative inline-block text-left md:text-xs lg:text-base">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-center w-full bg-transparent font-medium border border-slate-300 rounded-md px-2 py-2 text-slate-300 hover:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-100"
          >
            {t("changeLanguage")}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-black text-slate-300 ring-1 ring-black ring-opacity-5">
              <div className="" role="menu">
                <button
                  className="block px-4 py-2 text-sm hover:bg-zinc-900 hover:text-slate-100 w-full text-left"
                  onClick={() => changeLanguage("en")}
                >
                  {t("english")}
                </button>
                <button
                  className="block px-4 py-2 text-sm hover:bg-zinc-900 hover:text-slate-100 w-full text-left"
                  onClick={() => changeLanguage("es")}
                >
                  {t("spanish")}
                </button>
                <button
                  className="block px-4 py-2 text-sm hover:bg-zinc-900 hover:text-slate-100 w-full text-left"
                  onClick={() => changeLanguage("pt")}
                >
                  {t("portuguese")}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Links de navegación */}
        {links.map(({ sectionId, displayName, id }) => (
          <li
            key={id}
            className="px-2 lg:px-4 py-2 cursor-pointer capitalize font-medium text-slate-300 hover:scale-105 duration-200 text-xs lg:text-base"
          >
            <Link  href={`#${sectionId}`} scroll={true}>
              {displayName}
            </Link>
          </li>
        ))}
      </ul>

      {/* Menú móvil */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-stone-950 text-white">
          {links.map(({ sectionId, displayName, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl tracking-wide"
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