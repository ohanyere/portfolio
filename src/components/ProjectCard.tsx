import { motion } from "framer-motion";
import { type Project } from "../types";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-subtle"
    >
      <div
        className="h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image ?? ""})` }}
        aria-hidden
      />

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-primary-700">{project.title}</h4>
            {project.subtitle && <div className="text-sm text-neutral-600">{project.subtitle}</div>}
          </div>

          <div className="flex items-center gap-2">
            {project.repo ? (
              <a href={project.repo} target="_blank" rel="noreferrer" aria-label="Repo" className="text-neutral-600 hover:text-primary-700">
                <FaGithub />
              </a>
            ) : null}
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Demo" className="text-neutral-600 hover:text-primary-700">
                <FaExternalLinkAlt />
              </a>
            ) : null}
          </div>
        </div>

        <p className="mt-3 text-sm text-neutral-700">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary-50 text-primary-700">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
