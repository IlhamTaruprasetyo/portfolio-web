import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const [loaded, setLoaded] = useState(true); // Diubah ke true untuk sementara waktu agar tidak perlu menunggu loading screen saat mendesain
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      {/* <Loader onComplete={() => setLoaded(true)} /> */}
      {loaded && (
        <>
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
