import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="container mx-auto py-20">
      <motion.h2
        className="text-2xl md:text-3xl font-bold"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 grid gap-6 md:grid-cols-2"
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border p-6 bg-zinc-200/50 dark:bg-zinc-900/50 backdrop-blur"
        >
          <div className="grid  gap-4">
            <input id="name" className="rounded-xl border border-gray-600  bg-transparent px-4 py-3 outline-offset-4 focus:ring-2 focus:ring-indigo-500" placeholder="Your Name" />
            <input id="email" className="rounded-xl border border-gray-600  bg-transparent px-4 py-3 outline-offset-4 focus:ring-2 focus:ring-indigo-500" placeholder="Your Email" />
            <textarea id="message" rows={5} className="rounded-xl border border-gray-600   bg-transparent px-4 py-3 outline-offset-8 focus:ring-2 focus:ring-indigo-500" placeholder="Message" />
            <button 
            
            onClick={() => {
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                const subject = encodeURIComponent(`New message from ${name}`);
                const body = encodeURIComponent(`From: ${email}\n\n${message}`);
                window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aditya12rash@gmail.com&su=${subject}&body=${body}`);
              }}
            className="rounded-lg bg-indigo-600 text-white px-5 py-3 text-lg font-medium hover:bg-indigo-500 transition">
              Send
            </button>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Wire this to Email in Decent way ,coz it works.</p>
        </form>

        <div className="rounded-2xl border p-6  bg-zinc-200/50 dark:bg-zinc-900/50 backdrop-blur">
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Prefer email or socials? Reach me directly:
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <a href="mailto:aditya12rash@gmail.com" className="inline-flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Mail className="h-4 w-4" /> aditya12rash@gmail.com
            </a>
            <a href="https://github.com/AdityaShinde-git" className="inline-flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Github className="h-4 w-4" /> Check me on GitHub
            </a>
            <a href="https://www.linkedin.com/in/aditya-shinde-5a031b305/" className="inline-flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400">
              <Linkedin className="h-4 w-4" />  Check me on linkedin
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
