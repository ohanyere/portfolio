import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-2xl font-semibold text-primary-700 mb-4">About</h2>
      <p className="text-neutral-700 leading-relaxed">
          I’m Francis — a test-driven frontend developer who builds well-tested, high-performance applications using React, TypeScript, Cypress for E2E testing, and React Testing Library for component testing. I focus on pragmatic architecture, maintainable code, and delightful user experiences
      </p>

      <p className="mt-6 text-neutral-600 italic">
          Hobbies — I’m a big Manchester City fan and love watching their matches. Outside football, I enjoy relaxing with good music
      </p>
    </motion.div>
  );
}
