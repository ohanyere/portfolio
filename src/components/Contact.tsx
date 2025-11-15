import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center py-20"
    >
      <motion.a
        href="https://github.com/ohanyere?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          bg-black text-white 
          px-10 py-4 rounded-lg 
          text-xl font-semibold 
          shadow-lg transition-all
        "
      >
        View React Native Projects
      </motion.a>
    </motion.section>
  );
}
