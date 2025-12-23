import type { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  onMoreClick: (index: number) => void;
}

export const ExperienceCard = ({ experience, index, onMoreClick }: ExperienceCardProps) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm h-full flex flex-col">
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
      <div className="shrink-0">
        <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
          <img src={experience.logo} alt={`${experience.company} logo`} className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className="text-red-500 font-semibold">
          {experience.company} · <span className="text-gray-500 font-normal">{experience.period}</span>
        </p>
      </div>
    </div>

    <div className="relative flex-1 overflow-hidden">
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {experience.bullets.slice(0, 2).map((bullet, i) => (
          <li key={i} className={i === 1 ? "line-clamp-2" : ""}>{bullet}</li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
    </div>

    <button
      className="mt-2 text-red-500 font-semibold hover:underline self-start"
      onClick={() => onMoreClick(index)}
    >
      More
    </button>
  </div>
);