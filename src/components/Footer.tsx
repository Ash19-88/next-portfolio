import { useTranslations } from "next-intl";
import React from "react";
import { BsFillPersonLinesFill, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";



const Footer = () => {
  const  t  = useTranslations("Footer");
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <div className="w-full bg-zinc-900 text-white flex flex-col space-x-3 align-middle justify-center items-center ml-auto mr-auto pl-6 pr-4 pt-6 pb-4 lg:pt-2 lg:flex-row font-Raleway">
        <div className="flex justify-center lg:hidden space-x-6">
          <a href="https://wa.link/mdejk5">
            <BsWhatsapp size={23} />
          </a>
          <a href="/Ayelen-Llampa-resume.pdf">
            <BsFillPersonLinesFill size={23} />
          </a>
          <a href="https://github.com/Ash19-88">
            <BsGithub size={25} />
          </a>
          <a href="https://www.linkedin.com/in/ayelen-llampa1988/">
            <BsLinkedin size={25} />
          </a>
        </div>
        <p className="text-center flex lg:text-center mb-2 mt-3 lg:mb-2">
          {t("developedBy")}{" "}
          <span className="mr-2 ml-2 text-blue-600 hover:text-blue-300 cursor-pointer"><a href="https://www.linkedin.com/in/ayelen-llampa1988/">Ayelen Llampa</a> </span>
        </p>
        <div className="flex justify-center mb-4 lg:mb-2 lg:text-center lg:mt-3">
          <p>
            {t("copyright")} &copy;{year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
