import { FaTimes } from 'react-icons/fa';
import { EXPERIENCES } from '../data/experiences';

interface ExperienceModalProps {
  modalIndex: number | null;
  onClose: () => void;
}

export const ExperienceModal = ({ modalIndex, onClose }: ExperienceModalProps) => {
  if (modalIndex === null) return null;

  const experience = EXPERIENCES[modalIndex];

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-80 z-50" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
        <div className="bg-white rounded-lg max-w-lg w-full p-6 relative pointer-events-auto max-h-[90vh] overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-black hover:text-red-500"
            onClick={onClose}
          >
            <FaTimes size={24} />
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="text-red-500 font-semibold">
                {experience.company} · <span className="text-gray-500 font-normal">{experience.period}</span>
              </p>
            </div>
          </div>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            {experience.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};