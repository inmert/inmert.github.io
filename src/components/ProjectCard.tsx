import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
    <div className="w-full h-48 bg-gray-900 text-red-500 overflow-hidden flex items-center justify-center">
      <project.icon size={72} />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
            {tag}
          </span>
        ))}
      </div>
      {project.link !== "#" && (
        <a
          href={project.link}
          className="mt-auto text-red-500 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      )}
    </div>
  </div>
);
