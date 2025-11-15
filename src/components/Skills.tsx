import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  
  SiRedux,
  SiGraphql,
  SiFirebase,
  SiTailwindcss,
  SiCypress,
  SiTestinglibrary,
  SiStyledcomponents,
  SiNodedotjs,
  SiExpress,
  SiStorybook,
  SiExpo,
  
} from "react-icons/si";

import { motion } from "framer-motion";

const SKILLS = [
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Expo", Icon: SiExpo },
  { name: "Redux Toolkit", Icon: SiRedux },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Cypress (E2E)", Icon: SiCypress },
  { name: "React Testing Library", Icon: SiTestinglibrary },
  { name: "Story Book", Icon: SiStorybook },
  { name: "Styled Components", Icon: SiStyledcomponents },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
];

export default function Skills() {
  return (
    <motion.section className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center mb-12 sm:mb-20">
        <div>
          <h3 className="text-2xl sm:text-6xl font-semibold text-primary-700 capitalize">web {" "}/ {" "} mobile</h3>

        </div>
        
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-8 bg-gray-100 dark:bg-gray-800 rounded-xl">
      
      
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
    </div>
    </motion.section>
    
  );
}
