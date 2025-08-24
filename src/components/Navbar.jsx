import ThemeToggle from "./ThemeToggle";
import { Mail } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky  top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-blue-800/60 dark:supports-[backdrop-filter]:bg-zinc-850/60 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <div className="container  mx-auto flex items-center justify-between py-3">
        <a href="#hero" className="font-semibold text-xl">
          <span className=" text-2xl text-indigo-800 dark:text-purple-400">ADev</span>Portfolio
        </a>

        <nav className="hidden md:flex gap-4 text-xl ">
            
          {links.map((l) => (
            <div className=" p-0">
                <a key={l.href} href={l.href} className="p-4 border-b-4 border-transparent hover:border-blue-400 hover:bg-indigo-200 dark:hover:text-black dark:hover:bg-blue-500 dark:hover:border-white transition-all duration-200">
              {l.label}
            </a>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3 ">
          <a
            href="mailto:aditya12rash@gmail.com"
            className="hidden md:inline-flex items-center gap-2 rounded-full border px-4 py-2 text-lg hover:border-indigo-950 hover:text-indigo-800 dark:hover:text-indigo-400 transition hover:scale-110"
          >
            <Mail className="h-4 w-4 " />
            Contact via Mail
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
