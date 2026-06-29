import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Moon, Sun, Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

const NAV_ITEMS = [
  { label: "Home",        to: "hero" },
  { label: "Tentang",     to: "about" },
  { label: "Keahlian",   to: "skills" },
  { label: "Project",    to: "projects" },
  { label: "Sertifikat", to: "certificates" },
  { label: "Kontak",     to: "contact" },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300
        ${scrolled
          ? "bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth offset={-80} className="flex items-center gap-2 cursor-pointer">
          <Terminal size={20} className="text-gray-900 dark:text-white" />
          <span className="font-grotesk font-bold text-lg text-gray-900 dark:text-white tracking-tight">
            &lt;{personalInfo.name} /&gt;
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              offset={-80}
              spy
              activeClass="text-gray-900 dark:text-white"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900
                         dark:hover:text-white transition-colors cursor-pointer font-medium"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full border border-gray-200 dark:border-gray-700
                       hover:border-gray-400 dark:hover:border-gray-500 transition-all"
          >
            {isDark ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggleTheme} className="p-2">
            {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0A0A0A] border-t border-gray-200 dark:border-gray-800 px-6 pb-6"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900
                           dark:hover:text-white font-medium border-b border-gray-100 dark:border-gray-800
                           last:border-0 cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
