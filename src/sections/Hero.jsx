import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-gray-400 via-gray-800 to-blue-400 text-white py-20 px-4 text-center relative overflow-hidden">
      {/* soft gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </div>

      <div className="container mx-auto flex min-h-[72vh] flex-col items-center justify-center text-center py-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-400"
        >
          Web Developer • Frontend • Full Stack
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-4xl md:text-6xl font-extrabold"
        >
          Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">Aditya Shinde</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-zinc-400 dark:text-zinc-200"
        >
          I craft responsive, accessible, and performant web experiences with React, Tailwind, and modern tooling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-full bg-indigo-600 text-white dark:bg-indigo-600 dark:text-gray-800 px-5 py-2.5 text-lg font-medium hover:bg-indigo-500 transition shadow"
          >
            View Projects
          </a>
          
        </motion.div>
      </div>
    </div>
  );
}
