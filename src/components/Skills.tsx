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
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "Expo", Icon: SiExpo, color: "#000020" },
  { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Cypress (E2E)", Icon: SiCypress, color: "#17202C" },
  { name: "React Testing Library", Icon: SiTestinglibrary, color: "#E33332" },
  { name: "Storybook", Icon: SiStorybook, color: "#FF4785" },
  { name: "Styled Components", Icon: SiStyledcomponents, color: "#DB7093" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", Icon: SiExpress, color: "#000000" },
];

export default function Skills() {
  return (
    <motion.section className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center mb-12 sm:mb-20">
        <div>
          <h3 className="text-2xl sm:text-6xl font-semibold text-primary-700 capitalize">web {" "}/ {" "} mobile</h3>

        </div>
        
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-8  rounded-xl">
      
      
      {SKILLS.map(({ name, Icon , color}) => (
        <motion.div
          key={name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <Icon className="text-7xl text-gray-900"  color={color}/>
          <span className="text-sm font-medium text-gray-800 ">
            {name}
          </span>
        </motion.div>
      ))}
    </div>
    </motion.section>
    
  );
}
