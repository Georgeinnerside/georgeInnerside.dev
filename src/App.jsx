import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import About from "./sections/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Resume />
        <About />
      </main>
      <Footer />
    </div>
  );
}
