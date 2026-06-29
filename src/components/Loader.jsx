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
