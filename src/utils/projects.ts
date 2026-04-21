export type Project = {
    id: number;
    src: string;
    github: string;
    site: string;
    alt: string;
    translationKey: string;
    techStack: string[];
    width: number;
    height: number;
};

export const projects: Project[] = [
    {
        id: 1,
        src: "/cheers.gif",
        github: "https://github.com/Ash19-88",
        site: "https://www.cheerspain.com/",
        alt: "Cheers",
        width: 700,
        height: 100,
        translationKey: "cheers",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Stripe"]
    },
    {
        id: 2,
        src: "/nearbytour.gif",
        github: "https://github.com/No-Country/s11-21-react-next",
        site: "https://nearbytour.vercel.app/home",
        alt: "NearByTour",
        width: 700,
        height: 100,
        translationKey: "nearbytour",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },
    {
        id: 3,
        src: "/aracellipmu.gif",
        github: "https://github.com/Ash19-88",
        site: "https://goddess-permanent.vercel.app/",
        alt: "Goddess Permanent",
        width: 700,
        height: 100,
        translationKey: "aracellipmu",
        techStack: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
        id: 4,
        src: "/thinderpetPortfolio.gif",
        github: "https://github.com/No-Country/c13-36-t-node-react",
        site: "https://thinderpet.vercel.app/",
        alt: "Thinderpet",
        width: 700,
        height: 100,
        translationKey: "thinderpet",
        techStack: ["React", "JavaScript", "Tailwind CSS"]
    },
    {
        id: 6, 
        src: "/videogamePortfolio.gif",
        github: "https://github.com/Ash19-88/PI-videogames",
        site: "https://videogames-ashtech.vercel.app/",
        alt: "Videogames",
        width: 700,
        height: 100,
        translationKey: "videogames",
        techStack: ["React", "Redux", "JavaScript"]
    },
    {
        id: 7,
        src: "/starwars.gif",
        github: "https://github.com/Ash19-88/star-wars",
        site: "https://star-wars-ashtechsolutions.netlify.app/",
        alt: "Star Wars",
        width: 700,
        height: 100,
        translationKey: "starwars",
        techStack: ["React", "TypeScript", "Redux Toolkit", "CSS"]
    },
];