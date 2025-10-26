import { motion } from "framer-motion";
import { type Project } from "../types";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white border  border-gray-200 shadow-md hover:shadow-lg transition-shadow"
    >
      
      <div
        className="md:w-1/2 h-48 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image ?? ""})` }}
        aria-hidden
      ></div>

      
      <div className="p-6 flex flex-col flex-1">
        <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
        {project.subtitle && (
          <p className="text-sm text-gray-500 mt-1">{project.subtitle}</p>
        )}

        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
          {project.description}
        </p>

        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        
        <div className="mt-6 flex gap-3">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <FaGithub className="text-lg" />
              Code
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-black text-sm font-medium text-white hover:bg-gray-500 transition-colors"
            >
              <FaExternalLinkAlt className="text-lg" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
