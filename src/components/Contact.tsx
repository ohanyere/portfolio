import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const CONTACT_LINKS = [
    { Icon: Mail, href: "mailto:ohanyerefrancis395@gmail.com.com", label: "Email" },
    { Icon: Github, href: "https://github.com/ohanyere", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/ohanyere-francis-78a794374/", label: "LinkedIn" },
    { Icon: Twitter, href: "https://x.com/MooreOhanyere", label: "Twitter" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center py-28"
    >
      
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black dark:text-white tracking-tight mb-6">
       i will like to hear from you
      </h2>

      {/* Subtext */}
      <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 mb-12 leading-relaxed max-w-[56ch] mx-auto">
        If you’d like to collaborate with us or have a referral to send, we’d love to hear from you.
      </p>

      {/* Icons (centered for now) */}
      <div className="flex justify-center items-center gap-8">
        {CONTACT_LINKS.map(({ Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? "_self" : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-full transition-all duration-300 hover:bg-orange-200 text-black dark:text-white"
            aria-label={label}
          >
            <Icon className="h-10 w-10" strokeWidth={1.5} />
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
