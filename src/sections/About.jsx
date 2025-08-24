import { motion } from "framer-motion";
import { Mail, MapPin, FileDown, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative container mx-auto py-20 px-6">
      {/* background blob */}
      
        <div className="bg-green" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Left side - statement */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-lg leading-relaxed"
        >
          <p className="mb-4">
            I’m <span className="font-semibold">Aditya Rajaram Shinde</span>, a{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              Web Developer
            </span>{" "}
            who enjoys crafting <em>simple</em> yet <em>impactful</em> digital
            experiences. I believe great websites combine both creativity and functionality, and I strive to bring that balance into every project I work on.
          </p>
          <p>
            Beyond coding, I’m naturally curious and adaptable, always eager to explore new technologies and ideas that fuel both my growth as a developer and my creativity as a problem-solver.
          </p>
        </motion.div>
        

        {/* Divider */}
        <div className="hidden md:block w-px bg-zinc-300 dark:bg-zinc-700 " />

        {/* Right side - minimal info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Code className="text-indigo-500" />
            <span>Web Developer</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-indigo-500" />
            <span>India</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-indigo-500" />
            <span>aditya12rash@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FileDown className="text-indigo-500" />
            <a
              href="https://drive.google.com/file/d/1Nx_5l93a1EEn0X2KWw9dkZEHTEVB4FV6/view?usp=sharing"
              className="hover:underline hover:text-indigo-600"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}
