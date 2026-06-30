import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }) {
  const [done, setDone] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let start = null;
    const duration = 1500; // 1.5 seconds loading time
    
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min((progress / duration) * 100, 100);
      setPercent(Math.floor(percentage));
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setDone(true);
          setTimeout(onComplete, 600); // Wait for the exit animation
        }, 300); // Brief pause at 100%
      }
    };
    
    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#0A0A0A]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full max-w-[240px] flex flex-col items-center">
            {/* Logo / Text */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-5 text-xs font-bold tracking-[0.3em] uppercase text-gray-900 dark:text-white"
            >
              Loading
            </motion.div>
            
            {/* Loading Bar Container */}
            <div className="w-full h-[3px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              {/* Animated Bar */}
              <motion.div
                className="h-full bg-blue-600 dark:bg-white rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            {/* Percentage Counter */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 text-[11px] font-mono tracking-wider text-gray-500 dark:text-gray-400"
            >
              {percent}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
