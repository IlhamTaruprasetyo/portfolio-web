# 🖥️ Panduan Website Portofolio Interaktif — React.js

> **Stack:** React 18 + Vite · Tailwind CSS · Framer Motion · react-scroll · lucide-react

---

## 📁 Struktur Folder

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── cv.pdf                  ← Upload CV kamu di sini
│   └── assets/
│       ├── photo.jpg           ← Foto profil kamu
│       └── certificates/       ← Foto sertifikat
│           ├── cert1.jpg
│           └── cert2.jpg
├── src/
│   ├── components/
│   │   ├── Loader.jsx          ← Animasi intro terminal
│   │   ├── Navbar.jsx          ← Navigasi + dark/light toggle
│   │   ├── Hero.jsx            ← Section utama + foto
│   │   ├── About.jsx           ← Tentang saya
│   │   ├── Skills.jsx          ← Keahlian dengan progress bar
│   │   ├── Projects.jsx        ← Showcase project
│   │   ├── Certificates.jsx    ← Galeri sertifikat
│   │   ├── Contact.jsx         ← Form + link kontak
│   │   └── Footer.jsx          ← Footer
│   ├── data/
│   │   └── portfolioData.js    ← SEMUA DATA KAMU DI SINI
│   ├── hooks/
│   │   └── useTheme.js         ← Dark/light mode hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚡ Langkah Setup

### 1. Buat Project Baru

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
```

### 2. Install Dependencies

```bash
npm install framer-motion react-scroll lucide-react react-countup
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 📄 File-by-File Code

---

### `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
```

---

### `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-inter bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-gray-100 transition-colors duration-300;
  }

  h1, h2, h3, h4 {
    @apply font-grotesk;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { @apply bg-gray-100 dark:bg-[#111]; }
  ::-webkit-scrollbar-thumb { @apply bg-gray-400 dark:bg-gray-600 rounded-full; }

  /* Smooth scroll */
  html { scroll-behavior: smooth; }
}

@layer utilities {
  .section-padding {
    @apply py-20 px-6 md:px-16 lg:px-24;
  }

  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .gradient-text {
    @apply bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent;
  }

  .card {
    @apply bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl
           hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300;
  }
}
```

---

### `src/data/portfolioData.js`

> ⚠️ **EDIT FILE INI** untuk mengisi data pribadimu!

```js
// ============================================
//   EDIT SEMUA DATA DI SINI SESUAI PROFILMU
// ============================================

export const personalInfo = {
  name: "Nama Lengkapmu",
  nickname: "Panggilanmu",
  role: "Mahasiswa Teknologi Rekayasa Komputer",
  university: "Nama Universitasmu",
  bio: `Mahasiswa Teknologi Rekayasa Komputer yang passionate dalam pengembangan 
  software, web development, dan pemecahan masalah berbasis teknologi. 
  Saya gemar membangun aplikasi yang memberikan dampak nyata.`,
  email: "email@kamu.com",
  whatsapp: "628xxxxxxxxxx",   // format: 628xxx (tanpa +)
  linkedin: "linkedin.com/in/username-kamu",
  github: "github.com/username-kamu",
  location: "Kota, Provinsi, Indonesia",
  available: true,             // ubah ke false jika tidak available
  cvPath: "/cv.pdf",           // taruh file CV di public/cv.pdf
  photoPath: "/assets/photo.jpg",
};

export const skills = [
  // Kategori: Programming Languages
  {
    category: "Bahasa Pemrograman",
    items: [
      { name: "Python",         level: 80 },
      { name: "JavaScript",     level: 75 },
      { name: "Java",           level: 65 },
      { name: "C++",            level: 60 },
      { name: "PHP",            level: 55 },
    ],
  },
  // Kategori: Web
  {
    category: "Web Development",
    items: [
      { name: "HTML & CSS",     level: 90 },
      { name: "React.js",       level: 70 },
      { name: "Node.js",        level: 60 },
      { name: "Tailwind CSS",   level: 75 },
    ],
  },
  // Kategori: Tools
  {
    category: "Tools & Platform",
    items: [
      { name: "Git & GitHub",   level: 80 },
      { name: "Linux",          level: 65 },
      { name: "MySQL",          level: 70 },
      { name: "VS Code",        level: 90 },
      { name: "Figma",          level: 55 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Sistem Manajemen Inventaris",
    description:
      "Aplikasi web untuk mengelola stok barang, laporan, dan transaksi gudang menggunakan PHP dan MySQL.",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/username/project1",
    demo: "https://demo-link.com",        // hapus jika tidak ada
    image: "/assets/projects/proj1.jpg",  // hapus jika tidak ada
    highlight: true,                       // tampilkan sebagai featured
  },
  {
    id: 2,
    title: "Aplikasi To-Do List",
    description:
      "Aplikasi manajemen tugas dengan fitur prioritas, reminder, dan kategori menggunakan React.js.",
    techStack: ["React", "Tailwind", "LocalStorage"],
    github: "https://github.com/username/project2",
    demo: null,
    image: null,
    highlight: false,
  },
  {
    id: 3,
    title: "Monitoring Sensor IoT",
    description:
      "Dashboard real-time untuk memantau data sensor suhu dan kelembaban menggunakan ESP32 dan MQTT.",
    techStack: ["Arduino", "MQTT", "Python", "Chart.js"],
    github: "https://github.com/username/project3",
    demo: null,
    image: null,
    highlight: true,
  },
  // tambahkan project lainnya...
];

export const certificates = [
  {
    id: 1,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Januari 2024",
    image: "/assets/certificates/cert1.jpg",
    link: "https://dicoding.com/certificates/xxx",
  },
  {
    id: 2,
    title: "Python for Everybody",
    issuer: "Coursera",
    date: "Maret 2024",
    image: "/assets/certificates/cert2.jpg",
    link: "https://coursera.org/verify/xxx",
  },
  // tambahkan sertifikat lainnya...
];

export const education = [
  {
    degree: "S.Tr.T — Teknologi Rekayasa Komputer",
    institution: "Nama Universitasmu",
    year: "2022 — Sekarang",
    gpa: "3.8 / 4.0",
    notes: "Konsentrasi: Rekayasa Perangkat Lunak",
  },
  {
    degree: "SMA / SMK — Jurusanmu",
    institution: "Nama Sekolahmu",
    year: "2019 — 2022",
    gpa: null,
    notes: null,
  },
];

export const experiences = [
  // Kosongkan array ini jika belum punya pengalaman kerja
  {
    role: "Web Developer Intern",
    company: "Nama Perusahaan",
    period: "Jun 2024 — Agu 2024",
    description:
      "Membantu pengembangan fitur front-end menggunakan React.js dan memperbaiki bug pada sistem manajemen konten.",
  },
];

export const stats = [
  { label: "Project Selesai",    value: 12, suffix: "+" },
  { label: "Sertifikat",         value: 8,  suffix: "+" },
  { label: "Semester Aktif",     value: 5,  suffix: "" },
  { label: "GitHub Repositories",value: 20, suffix: "+" },
];
```

---

### `src/hooks/useTheme.js`

```js
import { useState, useEffect } from "react";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);
  return { isDark, toggleTheme };
};
```

---

### `src/components/Loader.jsx`

```jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "$ initializing portfolio...",
  "$ loading skills.json ✓",
  "$ fetching projects.json ✓",
  "$ compiling experience.json ✓",
  "$ ready. launching...",
];

export default function Loader({ onComplete }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      setTimeout(() => {
        setDone(true);
        setTimeout(onComplete, 600);
      }, 500);
      return;
    }

    const line = LINES[lineIndex];
    if (charIndex < line.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 35);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayed((d) => [...d, line]);
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex]);

  const current = lineIndex < LINES.length ? LINES[lineIndex].slice(0, charIndex) : "";

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]"
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-xl px-8 font-mono text-sm text-green-400">
            <div className="mb-6 text-gray-500 text-xs">// portfolio.exe</div>
            {displayed.map((line, i) => (
              <div key={i} className="mb-1 opacity-60">{line}</div>
            ))}
            {lineIndex < LINES.length && (
              <div className="flex items-center gap-0">
                <span className="text-white">{current}</span>
                <span className="ml-0.5 w-2 h-4 bg-green-400 animate-blink" />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

---

### `src/components/Navbar.jsx`

```jsx
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Moon, Sun, Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
            &lt;YourName /&gt;
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
```

---

### `src/components/Hero.jsx`

```jsx
import { motion } from "framer-motion";
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";
import { personalInfo, stats } from "../data/portfolioData";
import CountUp from "react-countup";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center section-padding pt-28">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="flex items-center gap-2 mb-4">
              <span className={`inline-block w-2 h-2 rounded-full ${
                personalInfo.available ? "bg-green-500" : "bg-gray-500"
              } animate-pulse`} />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {personalInfo.available ? "Available for opportunities" : "Currently unavailable"}
              </span>
            </motion.div>

            <motion.h1 variants={item}
              className="font-grotesk text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-4">
              <span className="gradient-text">Hi, I'm</span>
              <br />
              <span className="text-gray-900 dark:text-white">{personalInfo.nickname}</span>
            </motion.h1>

            <motion.p variants={item} className="text-lg text-gray-500 dark:text-gray-400 mb-4 font-mono">
              &lt; {personalInfo.role} /&gt;
            </motion.p>

            <motion.p variants={item} className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-lg">
              {personalInfo.bio}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <a
                href={personalInfo.cvPath}
                download
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white
                           text-white dark:text-gray-900 rounded-full font-medium hover:opacity-80
                           transition-all duration-200 hover:scale-105"
              >
                <Download size={16} />
                Download CV
              </a>
              <Link
                to="contact"
                smooth
                offset={-80}
                className="flex items-center gap-2 px-6 py-3 border border-gray-300
                           dark:border-gray-700 rounded-full font-medium hover:border-gray-900
                           dark:hover:border-white transition-all duration-200 cursor-pointer"
              >
                Hubungi Saya
              </Link>
            </motion.div>

            {/* Social */}
            <motion.div variants={item} className="flex gap-4">
              {[
                { icon: Github, href: `https://${personalInfo.github}` },
                { icon: Linkedin, href: `https://${personalInfo.linkedin}` },
                { icon: Mail, href: `mailto:${personalInfo.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-200 dark:border-gray-800 rounded-xl
                             hover:border-gray-500 dark:hover:border-gray-400 hover:-translate-y-1
                             transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2
                              border-gray-200 dark:border-gray-800 shadow-2xl">
                <img
                  src={personalInfo.photoPath}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add(
                      "bg-gradient-to-br", "from-gray-800", "to-gray-600",
                      "flex", "items-center", "justify-center"
                    );
                    e.target.parentElement.innerHTML =
                      `<span class="text-6xl text-white font-grotesk font-bold">
                        ${personalInfo.nickname.charAt(0)}
                      </span>`;
                  }}
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 border border-dashed border-gray-300 dark:border-gray-700 rounded-3xl -z-10" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {stats.map((stat, i) => (
                <div key={i} className="card p-4 text-center">
                  <div className="font-grotesk text-2xl font-bold text-gray-900 dark:text-white">
                    <CountUp end={stat.value} duration={2} delay={0.5} />
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <Link to="about" smooth offset={-80} className="cursor-pointer flex flex-col items-center gap-2
            text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
            <span className="text-xs font-mono tracking-widest">scroll down</span>
            <ArrowDown size={16} className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
```

---

### `src/components/About.jsx`

```jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { personalInfo, education, experiences } from "../data/portfolioData";

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-12">
      <p className="text-sm text-gray-400 dark:text-gray-500 font-mono mb-2 tracking-widest uppercase">
        {eyebrow}
      </p>
      <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="mt-4 w-16 h-0.5 bg-gray-900 dark:bg-white" />
    </div>
  );
}

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          <SectionTitle eyebrow="// about me" title="Tentang Saya" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Bio */}
          <div className="lg:col-span-1 reveal">
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4 text-gray-500 dark:text-gray-400">
                <MapPin size={16} />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{personalInfo.bio}</p>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <p className="text-xs font-mono text-gray-400 mb-1">Email</p>
                <a href={`mailto:${personalInfo.email}`}
                   className="text-sm font-medium hover:underline">{personalInfo.email}</a>
              </div>
            </div>
          </div>

          {/* Education + Experience */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <div className="reveal">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={20} />
                <h3 className="font-grotesk text-xl font-semibold">Pendidikan</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="card p-5 relative pl-8 before:absolute before:left-4
                    before:top-6 before:bottom-6 before:w-px before:bg-gray-200 dark:before:bg-gray-800">
                    <div className="absolute left-3 top-5 w-2.5 h-2.5 rounded-full bg-gray-900 dark:bg-white ring-2 ring-gray-50 dark:ring-[#111]" />
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                        <p className="text-sm text-gray-500">{edu.institution}</p>
                        {edu.notes && <p className="text-xs text-gray-400 mt-1">{edu.notes}</p>}
                      </div>
                      <div className="text-right">
                        <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                          {edu.year}
                        </span>
                        {edu.gpa && (
                          <p className="text-xs text-gray-500 mt-1">IPK: {edu.gpa}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            {experiences.length > 0 && (
              <div className="reveal">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase size={20} />
                  <h3 className="font-grotesk text-xl font-semibold">Pengalaman</h3>
                </div>
                <div className="space-y-4">
                  {experiences.map((exp, i) => (
                    <div key={i} className="card p-5">
                      <div className="flex flex-wrap justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-semibold">{exp.role}</h4>
                          <p className="text-sm text-gray-500">{exp.company}</p>
                        </div>
                        <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full h-fit">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### `src/components/Skills.jsx`

```jsx
import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolioData";

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          setAnimate(true);
        }
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-[#0D0D0D]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <p className="text-sm text-gray-400 font-mono mb-2 tracking-widest uppercase">// skills</p>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold">Keahlian</h2>
          <div className="mt-4 w-16 h-0.5 bg-gray-900 dark:bg-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, gi) => (
            <div key={gi} className="card p-6 reveal">
              <h3 className="font-grotesk font-semibold text-lg mb-6">{group.category}</h3>
              <div className="space-y-5">
                {group.items.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gray-900 dark:bg-white rounded-full transition-all duration-1000 ease-out"
                        style={{ width: animate ? `${skill.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### `src/components/Projects.jsx`

```jsx
import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const ref = useRef(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = filter === "featured"
    ? projects.filter((p) => p.highlight)
    : projects;

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <p className="text-sm text-gray-400 font-mono mb-2 tracking-widest uppercase">// projects</p>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold">Project</h2>
          <div className="mt-4 w-16 h-0.5 bg-gray-900 dark:bg-white" />
        </div>

        {/* Filter */}
        <div className="flex gap-3 mb-8 reveal">
          {["all", "featured"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all
                ${filter === f
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent"
                  : "border-gray-300 dark:border-gray-700 hover:border-gray-500"
                }`}
            >
              {f === "all" ? "Semua" : "Featured"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.id} className="card p-6 flex flex-col reveal group">
              {project.highlight && (
                <div className="flex items-center gap-1 text-yellow-500 text-xs mb-3 font-mono">
                  <Star size={12} fill="currentColor" /> featured
                </div>
              )}
              {project.image && (
                <div className="h-40 rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800">
                  <img src={project.image} alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              )}
              <h3 className="font-grotesk font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span key={i}
                    className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full font-mono">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm hover:underline text-gray-600 dark:text-gray-400">
                    <Github size={14} /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm hover:underline text-gray-600 dark:text-gray-400">
                    <ExternalLink size={14} /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### `src/components/Certificates.jsx`

```jsx
import { useEffect, useRef, useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import { certificates } from "../data/portfolioData";

export default function Certificates() {
  const ref = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certificates" className="section-padding bg-gray-50 dark:bg-[#0D0D0D]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <p className="text-sm text-gray-400 font-mono mb-2 tracking-widest uppercase">// certificates</p>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold">Sertifikat</h2>
          <div className="mt-4 w-16 h-0.5 bg-gray-900 dark:bg-white" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} onClick={() => setSelected(cert)}
              className="card p-5 cursor-pointer hover:-translate-y-1 transition-all duration-200 reveal">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  {cert.image
                    ? <img src={cert.image} alt={cert.title} className="w-full h-full object-cover rounded-xl" />
                    : <Award size={24} className="text-gray-500" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm leading-tight mb-1 truncate">{cert.title}</h3>
                  <p className="text-xs text-gray-500">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 font-mono mt-1">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}>
          <div className="bg-white dark:bg-[#111] rounded-2xl max-w-lg w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-grotesk font-bold text-lg">{selected.title}</h3>
                <p className="text-gray-500 text-sm">{selected.issuer} · {selected.date}</p>
              </div>
              <button onClick={() => setSelected(null)} className="p-2 hover:opacity-70">
                <X size={20} />
              </button>
            </div>
            {selected.image && (
              <img src={selected.image} alt={selected.title}
                className="w-full rounded-xl mb-4 border border-gray-200 dark:border-gray-800" />
            )}
            {selected.link && (
              <a href={selected.link} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:underline">
                <ExternalLink size={14} /> Verifikasi Sertifikat
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
```

---

### `src/components/Contact.jsx`

```jsx
import { useEffect, useRef } from "react";
import { Mail, MessageCircle, Linkedin, Github, MapPin, Send } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "hover:text-red-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: `+${personalInfo.whatsapp}`,
    href: `https://wa.me/${personalInfo.whatsapp}`,
    color: "hover:text-green-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: personalInfo.linkedin,
    href: `https://${personalInfo.linkedin}`,
    color: "hover:text-blue-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: personalInfo.github,
    href: `https://${personalInfo.github}`,
    color: "hover:text-purple-500",
  },
];

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="reveal mb-12">
          <p className="text-sm text-gray-400 font-mono mb-2 tracking-widest uppercase">// contact</p>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold">Hubungi Saya</h2>
          <div className="mt-4 w-16 h-0.5 bg-gray-900 dark:bg-white" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="reveal">
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Terbuka untuk peluang kolaborasi, magang, atau project freelance.
              Jangan ragu untuk menghubungi saya!
            </p>
            <div className="space-y-4">
              {contacts.map(({ icon: Icon, label, value, href, color }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 card group ${color} transition-all`}>
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl group-hover:scale-110 transition-transform">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                    <p className="text-sm font-medium truncate">{value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-6 text-sm text-gray-500">
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.target);
                const subject = encodeURIComponent(`Pesan dari ${data.get("name")}`);
                const body = encodeURIComponent(data.get("message"));
                window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
              }}
              className="card p-6 space-y-4"
            >
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Nama</label>
                <input name="name" required placeholder="Nama kamu"
                  className="w-full bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800
                             rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-500 transition-colors" />
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Email</label>
                <input name="email" type="email" required placeholder="email@kamu.com"
                  className="w-full bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800
                             rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-500 transition-colors" />
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Pesan</label>
                <textarea name="message" rows={4} required placeholder="Tuliskan pesanmu..."
                  className="w-full bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-800
                             rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-500 transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-white
                           text-white dark:text-gray-900 py-3 rounded-xl font-medium
                           hover:opacity-80 transition-all duration-200 hover:scale-[1.02]">
                <Send size={16} />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### `src/components/Footer.jsx`

```jsx
import { Terminal } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-500">
          <Terminal size={16} />
          <span className="font-grotesk font-medium">{personalInfo.name}</span>
        </div>
        <p className="text-sm text-gray-400 font-mono">
          © {new Date().getFullYear()} · Built with React + ❤️
        </p>
        <p className="text-xs text-gray-400">{personalInfo.role}</p>
      </div>
    </footer>
  );
}
```

---

### `src/App.jsx`

```jsx
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
  const [loaded, setLoaded] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
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
```

---

### `src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

---

### `index.html`

```html
<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Portfolio - Teknologi Rekayasa Komputer" />
    <title>Portfolio | YourName</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 🚀 Cara Menjalankan

```bash
# Development
npm run dev

# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

---

## 🌐 Deploy ke Vercel (Gratis)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Atau connect GitHub repo ke vercel.com → auto deploy!
```

---

## ✅ Checklist Personalisasi

Sebelum deploy, pastikan sudah mengedit:

- [ ] `src/data/portfolioData.js` — nama, bio, email, WhatsApp, GitHub, LinkedIn
- [ ] `public/cv.pdf` — upload file CV kamu
- [ ] `public/assets/photo.jpg` — foto profilmu
- [ ] `public/assets/certificates/` — foto sertifikat
- [ ] `public/assets/projects/` — screenshot project (opsional)
- [ ] `index.html` — ubah `<title>` sesuai namamu

---

## 💡 Tips Tambahan

| Fitur | Cara |
|---|---|
| Foto tidak muncul | Pastikan path di `portfolioData.js` sesuai lokasi file di `public/` |
| Form kontak | Saat ini membuka email client; untuk form real gunakan **Formspree** atau **EmailJS** |
| Tambah section baru | Buat `src/components/NamaSection.jsx`, import di `App.jsx`, tambahkan di `NAV_ITEMS` |
| Animasi lebih halus | Tambahkan `viewport={{ once: true }}` di setiap `motion.div` |
| Google Analytics | Tambahkan script GA4 di `index.html` |

---

*Generated for: Ilham — Mahasiswa Teknologi Rekayasa Komputer*
