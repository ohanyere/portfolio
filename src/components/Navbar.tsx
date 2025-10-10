import { useEffect, useState } from "react";
import { GithubIcon, Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "../useMediaQuery";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMediaAbove = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-3 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-sm bg-white/80 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-5/6 mx-auto">
        <div className="px-6 flex items-center justify-between py-3">
          {/* Left Section: Logo + GitHub */}
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-md flex items-center justify-center border border-neutral-300 text-neutral-800 font-serif text-xl font-semibold tracking-wider">
              F
            </div>

            <a
              href="https://github.com/ohanyere"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-800 transition-transform duration-300"
            >
              <GithubIcon className="h-10 w-10 hover:scale-125 transition duration-300" />
            </a>
          </div>

          {/* Right Section: Desktop Navigation or Mobile Button */}
          {isMediaAbove ? (
            <nav className="bg-black rounded-full w-[40%] py-4 px-3">
              <ul className="flex items-center gap-8 ">
                {NAV.map((item) => (
                  <li key={item.id}>
                    <ScrollLink
                      to={item.id}
                      smooth
                      duration={500}
                      offset={-80}
                      className="text-[0.95rem]  text-white hover:text-orange-400 font-semibold hover:font-medium tracking-wide cursor-pointer transition-colors"
                    >
                      {item.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-neutral-800 hover:text-neutral-600 transition"
            >
              {menuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && !isMediaAbove && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="fixed inset-y-0 right-0 w-64 bg-white border-l border-neutral-200 shadow-lg z-40 flex flex-col justify-between"
          >
            <div className="p-6 space-y-8">
              <div className="flex justify-between items-center">
                <div className="h-10 w-10 rounded-md flex items-center justify-center border border-neutral-300 text-neutral-800 font-serif text-xl font-semibold tracking-wider">
                  F
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-neutral-700 hover:text-neutral-900"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav>
                <ul className="flex flex-col gap-6">
                  {NAV.map((item) => (
                    <li key={item.id}>
                      <ScrollLink
                        to={item.id}
                        smooth
                        duration={500}
                        offset={-80}
                        onClick={() => setMenuOpen(false)}
                        className="text-lg text-neutral-800 hover:text-neutral-600 font-light tracking-wide cursor-pointer transition-colors"
                      >
                        {item.label}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="p-6 border-t border-neutral-200 text-sm text-neutral-500">
              © {new Date().getFullYear()} Francis
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
