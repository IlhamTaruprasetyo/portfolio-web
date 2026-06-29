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
                  className="w-full h-full object-cover object-top"
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
