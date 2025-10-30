import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiGraphql,
  SiFirebase,
  SiTailwindcss,
  SiCypress,
  SiTestinglibrary,
  SiStyledcomponents,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { FaFeatherAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Redux Toolkit", Icon: SiRedux },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Cypress (E2E)", Icon: SiCypress },
  { name: "React Testing Library", Icon: SiTestinglibrary },
  { name: "Styled Components", Icon: SiStyledcomponents },
  { name: "React Quill", Icon: FaFeatherAlt },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
];

export default function Skills() {
  return (
    <section className="flex flex-wrap justify-center gap-8 py-8 bg-gray-100 rounded-xl">
      {SKILLS.map(({ name, Icon }) => (
        <motion.div
          key={name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <Icon className="text-5xl text-gray-900" />
          <span className="text-sm font-medium text-gray-800 ">
            {name}
          </span>
        </motion.div>
      ))}
    </section>
  );
}
