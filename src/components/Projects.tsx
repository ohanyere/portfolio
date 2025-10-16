
import PROJECTS from "../data/PROJECTS"
import ProjectCard from "./ProjectCard";


export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl sm:text-4xl font-semibold text-primary-700">Projects</h3>
        <p className="text-sm  text-neutral-600">Selected work & case studies</p>
      </div>

          <div className="grid gap-10">
      {PROJECTS.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>

    </div>
  );
}
