import { useTranslations } from "next-intl";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  const t = useTranslations("SocialLinks");
  const links = [
    {
      id: 1,
      child: (<>{t("linkedinLink")} <FaLinkedin size={25} /></>),
      href: "https://www.linkedin.com/in/ayelen-llampa1988",
    },
    {
      id: 2,
      child: (<>{t("githubLink")} <FaGithub size={25} /></>),
      href: "https://github.com/Ash19-88",
    },
    {
      id: 3,
      child: (<>{t("resumeLink")} <BsFillPersonLinesFill size={25} /></>),
      href: "/Ayelen-Llampa-resume.pdf",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-30">
      <ul>
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className="flex justify-between items-center w-40 h-14 px-4 ml-[-105px] hover:ml-[-10px] duration-500 bg-zinc-950/40 backdrop-blur-md border border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] first:rounded-tr-xl last:rounded-br-xl"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-slate-400 hover:text-white font-mono text-xs tracking-widest transition-colors"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
