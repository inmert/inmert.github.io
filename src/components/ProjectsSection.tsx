import { ProjectCard } from './ProjectCard';
import { PROJECTS } from '../data/projects';

export const ProjectsSection = () => (
  <section id="projects" className="mb-16 max-w-6xl mx-auto scroll-mt-24">
    <h2 className="text-4xl font-bold mb-8">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);