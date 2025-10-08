import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const CONTACT_LINKS = [
    { Icon: Mail, href: "mailto:youremail@example.com", label: "Email" },
    { Icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { Icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center py-28"
    >
      
    </motion.section>
  );
}
