import Header from "./ui/layouts/header/Header";
import About from "./ui/layouts/pages-contents/about/About";
import Contact from "./ui/layouts/pages-contents/contact/Contact";
import Side from "./ui/layouts/pages-contents/dd/Side";
import Experience from "./ui/layouts/pages-contents/experience/Experience";
import Intro from "./ui/layouts/pages-contents/intro/Intro";
import Projects from "./ui/layouts/pages-contents/projects/Projects";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Intro />
      <Side />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
