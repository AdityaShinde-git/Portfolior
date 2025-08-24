import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="container mx-auto py-20">
      <motion.h2
        className="text-2xl md:text-3xl font-bold"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="relative mt-10">
        {/* vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400/60 via-zinc-300/40 to-fuchsia-400/60 dark:from-indigo-500/40 dark:via-zinc-700 dark:to-fuchsia-500/40 rounded-full  shadow-inner" />

        <ul className="space-y-12">
          {projects.map((p, idx) => {
            const left = idx % 2 === 0;
            return (
              <li key={p.title} className="relative">
                {/* dot */}
                <div className="absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-indigo-400 shadow" />

                <motion.div
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ type: "spring", stiffness: 120, damping: 16 }}
                  className={`flex ${left ? "justify-start" : "justify-end"} pt-2`}
                >
                  <div className="w-full md:w-[46%] rounded-2xl border bg-zinc-400/60 dark:bg-zinc-900/50 backdrop-blur p-5 hover:scale-105 hover:shadow transition">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold">{p.title}</h3>
                      <span className="text-md rounded-full border px-2 py-1 text-zinc-950 dark:text-zinc-300">{p.period}</span>
                    </div>
                    <p className="mt-2 text-lg text-zinc-950 dark:text-zinc-300">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[16px] rounded-full border px-2 py-1 text-zinc-950 dark:text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-3 text-sm">
                      <a href={p.links.live} className="rounded-lg text-md border px-3 py-1 hover:scale-110 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-200">Live</a>
                      <a href={p.links.code} className="rounded-lg text-md border px-3 py-1 hover:scale-110 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-200">Code</a>
                    </div>
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
