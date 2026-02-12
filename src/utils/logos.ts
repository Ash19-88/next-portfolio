export type Logo = {
  id: number;
  src: string;
  title: string;
  style: string;
}

export const logos: Logo[] = [
  { id: 1, src: "/html.png", title: "HTML5", style: "shadow-orange-500" },
  { id: 2, src: "/css.png", title: "CSS3", style: "shadow-blue-500" },
  { id: 3, src: "/javascript.png", title: "JavaScript", style: "shadow-yellow-500" },
  { id: 4, src: "/typescript.png", title: "TypeScript", style: "shadow-blue-500" },
  { id: 5, src: "/react.png", title: "React", style: "shadow-blue-400" },
  { id: 6, src: "/next-js.svg", title: "Next.js", style: "shadow-white" },
  { id: 7, src: "/tailwind.png", title: "Tailwind CSS", style: "shadow-blue-300" },
  { id: 8, src: "/firebase.svg", title: "Firebase", style: "shadow-yellow-500" },
  { id: 9, src: "/github.png", title: "GitHub", style: "shadow-white" },
  { id: 10, src: "/figma.svg", title: "Figma", style: "shadow-pink-500" },
  { id: 11, src: "/postman.svg", title: "Postman", style: "shadow-orange-500" },
];
