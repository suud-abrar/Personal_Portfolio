import React from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Leadership } from "./components/Leadership";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GlobalStyles } from "./components/GlobalStyles";

export default function Portfolio() {
  return (
    <div
      style={{
        background: "#0c1116",
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <div className="bg-grid" />
      <GlobalStyles />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Leadership />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
