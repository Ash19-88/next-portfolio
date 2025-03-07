export type Project = {
    id: number;
    src: string;
    github?: string;
    site?: string;
    style?: string;
    alt: string;
    translationKey?: string; 
    techStack?: string[]; 
    width: number;
    height: number
  };

export const projects: Project[] = [
    {
        id: 1,
        src: "/cheers.gif",
        github: "https://github.com/Ash19-88",
        site: "https://www.cheerspain.com/",
        style: "shadow-yellow-600",
        alt: "Cheers",
        width: 360,
        height: 100,
        translationKey: "cheers",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Daysi UI", "Firebase", "Node", "Express", "Nodemailer", "Vercel"]
    },
    {
        id: 2,
        src: "/nearbytour.gif",
        github: "https://github.com/No-Country/s11-21-react-next",
        site: "https://nearbytour.vercel.app/home",
        style: "shadow-orange-500",
        alt: "NearByTour",
        width: 360,
        height: 100,
        translationKey: "nearbytour",
        techStack: ["React", "Next JS", "Tailwind CSS", "HTML5", "CSS3", "TypeScript", "Vercel"]
    },
    {
        id: 3,
        src: "/aracellipmu.gif",
        github: "https://github.com/Ash19-88",
        site: "https://aracelli-pmu.vercel.app/",
        style: "shadow-pink-400",
        alt: "Aracelli PMU",
        width: 360,
        height: 100,
        translationKey: "aracellipmu",
        techStack: ["Vite", "React", "Tailwind CSS", "Daysi UI", "TypeScript", "Vercel"]
    },
    {
        id: 4,
        src:  "/thinderpetPortfolio.gif",
        github: "https://github.com/No-Country/c13-36-t-node-react",
        site: "https://thinderpet.vercel.app/",
        style: "shadow-pink-300",
        alt: "Thinderpet",
        width: 360,
        height: 100,
        translationKey: "thinderpet",
        techStack: ["React", "Tailwind CSS", "Vite", "JavaScript", "Vercel" ]
    },
    {
        id: 5,
        src:  "/tunematch.gif",
        github: "https://github.com/No-Country/s13-05-t-node-react",
        site: "https://s13-05-t-node-react-1b9t.onrender.com/",
        style: "shadow-purple-400",
        alt: "TuneMatch",
        width: 360,
        height: 100,
        translationKey: "tunematch",
        techStack: ["React", "Tailwind CSS", "Daysi UI", "JavaScript", "HTML", "CSS"]
    },
    {
        id: 6,
        src:  "/videogamePortfolio.gif",
        github: "https://github.com/Ash19-88/PI-videogames",
        site: "https://videogames-ashtech.vercel.app/",
        style: "shadow-violet-600",
        alt: "Videogames",
        width: 360,
        height: 100,
        translationKey: "videogames",
        techStack: ["React", "Redux", "Express", "Sequelize- Postgress", "CSS", "JavaScript", "Vercel"], 
    },
    {
        id: 7,
        src:  "/starwars.gif",
        github: "https://github.com/Ash19-88/star-wars",
        site: "https://star-wars-ashtechsolutions.netlify.app/",
        style: "shadow-red-500",
        alt: "Star Wars",
        width: 360,
        height: 100,
        translationKey: "starwars",
        techStack: ["Vite", "React", "Redux Toolkit", "TypeScript", "Netlify"]
    },
  ];