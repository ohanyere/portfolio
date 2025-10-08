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
        I’m a fast-evolving frontend engineer who loves learning and shipping
        products. I enjoy collaborating with designers, engineers, and product
        people to turn ideas into polished, user-friendly experiences. My work
        focuses on pragmatic architecture, maintainable code, and delightful UX.
      </p>

      <p className="mt-6 text-neutral-600 italic">
        Hobbies: continuous learning, building side projects, and mentoring.
      </p>
    </motion.div>
  );
}
