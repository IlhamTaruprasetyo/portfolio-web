import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Star, X } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const ref = useRef(null);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    ref.current?.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const filtered =
    filter === "featured"
      ? projects.filter((p) => p.highlight)
      : projects;

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <p className="text-sm text-gray-400 font-mono mb-2 tracking-widest uppercase">
            // projects
          </p>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold">
            Project
          </h2>
          <div className="mt-4 w-16 h-0.5 bg-gray-900 dark:bg-white" />
        </div>

        {/* Filter */}
        <div className="flex gap-3 mb-8 reveal">
          {["all", "featured"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all
                ${
                  filter === f
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent"
                    : "border-gray-300 dark:border-gray-700 hover:border-gray-500"
                }`}
            >
              {f === "all" ? "Semua" : "Featured"}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="card p-6 flex flex-col reveal group"
            >
              {project.highlight && (
                <div className="flex items-center gap-1 text-yellow-500 text-xs mb-3 font-mono">
                  <Star size={12} fill="currentColor" />
                  featured
                </div>
              )}

              {/* Thumbnail */}
              {project.images?.length > 0 && (
                <div
                  onClick={() => {
                    setSelected(project);
                    setCurrentImage(0);
                  }}
                  className="h-40 rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800 cursor-zoom-in hover:opacity-95 transition-opacity"
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <h3 className="font-grotesk font-semibold text-lg mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm hover:underline text-gray-600 dark:text-gray-400"
                  >
                    <Github size={14} />
                    Code
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm hover:underline text-gray-600 dark:text-gray-400"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white dark:bg-[#111] rounded-2xl max-w-3xl w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-grotesk font-bold text-lg text-gray-900 dark:text-white">
                  {selected.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {selected.techStack.join(" · ")}
                </p>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="p-2 hover:opacity-70 text-gray-500 dark:text-gray-400"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Image */}
            {selected.images?.length > 0 && (
              <>
                <img
                  src={selected.images[currentImage]}
                  alt={selected.title}
                  className="w-full rounded-xl mb-4 border border-gray-200 dark:border-gray-800 max-h-[500px] object-contain bg-gray-50 dark:bg-gray-900/50"
                />

                {/* Thumbnail Gallery */}
                {selected.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto mb-4">
                    {selected.images.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Preview ${index + 1}`}
                        onClick={() => setCurrentImage(index)}
                        className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all
                          ${
                            currentImage === index
                              ? "border-blue-500"
                              : "border-transparent"
                          }`}
                      />
                    ))}
                  </div>
                )}
              </>
            )}

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {selected.description}
            </p>

            <div className="flex gap-4">
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:underline text-gray-900 dark:text-white"
                >
                  <Github size={14} />
                  Repository Code
                </a>
              )}

              {selected.demo && (
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:underline text-gray-900 dark:text-white"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

