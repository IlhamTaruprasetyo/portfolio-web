import { useEffect, useRef } from "react";
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
