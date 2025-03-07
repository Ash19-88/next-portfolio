import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";

export default function HomePage() {
  return (
    <div className="bg-zinc-950 ">
      <NavBar />
      <Main />
      <About />
      <Projects />
      <Experience />
      <SocialLinks />
      <Footer />
    </div>
  );
}
