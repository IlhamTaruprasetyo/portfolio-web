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
          © {new Date().getFullYear()} - {personalInfo.email}
        </p>
        <p className="text-xs text-gray-400">{personalInfo.role}</p>
      </div>
    </footer>
  );
}
