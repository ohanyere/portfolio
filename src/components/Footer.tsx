import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  const CONTACT_LINKS = [
    { Icon: Mail, href: "mailto:ohanyerefrancis395@gmail.com", label: "Email" },
    { Icon: Github, href: "https://github.com/ohanyere", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/ohanyere-francis-78a794374/", label: "LinkedIn" },
    { Icon: Twitter, href: "https://x.com/MooreOhanyere", label: "Twitter" },
  ];

  return (
    <footer className="mt-24 border-t border-neutral-200 bg-white text-center">
      <div className="px-6 py-14 max-w-3xl mx-auto">
        {/* Text */}
        <p className="text-[1.3rem] sm:text-[1.6rem] font-medium text-neutral-800 leading-relaxed tracking-wide mb-8">
          <span className="font-semibold text-neutral-900">Francis is fast-evolving</span>, always learning and getting things done.
          Follow my journey as I grow, build, and refine.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-8 mb-10">
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
              <Icon className="h-8 w-8" strokeWidth={1.5} />
            </motion.a>
          ))}
        </div>

        {/* Footer bottom text */}
        <div className="text-sm text-neutral-500">
          © {year} Francis — crafted with calm precision.
        </div>
      </div>
    </footer>
  );
}
