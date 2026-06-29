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
