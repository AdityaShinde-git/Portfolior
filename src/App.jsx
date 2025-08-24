import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-indigo-300/40">
        {/* Decorative subtle grid */}
        <div className="fixed inset-0 pointer-events-none text-zinc-900 dark:text-white">
          <div className="absolute inset-0 bg-grid" />
        </div>

        <Navbar />

        <main className="relative">
          <section id="hero"><Hero /></section>
          <section id="about"className="bg-gray-100 dark:bg-zinc-900"><About /></section>
          <section id="skills"className="bg-gray-100 dark:bg-zinc-900" ><Skills /></section>
          <section id="projects" className="bg-gradient-to-br from-zinc-500 via-zinc-900 to-zinc-400"><Projects /></section>
          <section id="contact" className="bg-gray-100 dark:bg-zinc-900"><Contact /></section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
