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
