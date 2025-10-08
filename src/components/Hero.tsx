import { motion } from "framer-motion";
import { HandIcon, Code2Icon } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex justify-center items-center min-h-[80vh] text-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        {/* Big "Hi, I’m" */}
        <motion.p
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="flex justify-center items-center gap-2 text-2xl sm:text-4xl font-semibold tracking-wide text-neutral-700"
        >
          Hi, I’m
          <motion.span
            animate={{ rotate: [0, 20, 0] }}
            transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
          >
            <HandIcon className="w-12 h-12 text-orange-400" />
          </motion.span>
        </motion.p>

        {/* Hero Name */}
        <motion.h1
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="flex justify-center items-center gap-3 font-heading font-extrabold text-black text-7xl sm:text-8xl md:text-9xl tracking-wide leading-tight cursor-move"
        >
          Francis<span className="ml-2">.</span>
          <motion.span
            whileHover={{ rotate: 15 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {/* <Code2Icon className="w-10 h-10 text-orange-400" /> */}
          </motion.span>
        </motion.h1>

        {/* Description */}
        <p className="text-base sm:text-lg leading-relaxed tracking-wide max-w-2xl mx-auto">
          I’m Francis —<span className=""> a test-driven front-end developer who builds well-tested, high-performance applications using React, TypeScript, Cypress for E2E testing, and React Testing Library for component testing.</span> I focus on clean architecture, clarity, and reliability.
        </p>

        {/* Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#projects"
            className="rounded-full px-6 py-3 text-sm font-medium tracking-wide hover:underline transition-colors"
          >
            View Projects
          </a>

          <a
            href="mailto:youremail@example.com"
            className="text-sm tracking-wide text-neutral-700 hover:underline transition-colors"
          >
            Say hello
          </a>
        </div>
      </motion.div>
    </section>
  );
}
