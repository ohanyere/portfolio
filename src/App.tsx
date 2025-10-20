import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <Navbar />
      <main className="container-max px-6">
        <AnimatePresence mode="wait">
          <section id="hero" className="pt-24">
            <Hero />
          </section>

          <section id="about" className="pt-20">
            <About />
          </section>

          <section id="skills" className="pt-20">
            <Skills />
          </section>

          <section id="projects" className="pt-20">
            <Projects />
          </section>

          <section id="contact" className="pt-20 ">
            <Contact />
          </section>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
