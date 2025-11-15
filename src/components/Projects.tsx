
import PROJECTS from "../data/PROJECTS"
import ProjectCard from "./ProjectCard";


export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center mb-12 sm:mb-20">
        <div>
          <h3 className="text-2xl sm:text-6xl font-semibold text-primary-700">Featured Projects</h3>

        </div>
        
      </div>

          <div className="grid gap-14">
      {PROJECTS.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>

    </div>
  );
}
