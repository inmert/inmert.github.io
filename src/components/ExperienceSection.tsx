import { ExperienceCard } from './ExperienceCard';
import { EXPERIENCES } from '../data/experiences';

interface ExperienceSectionProps {
  onMoreClick: (index: number) => void;
}

export const ExperienceSection = ({ onMoreClick }: ExperienceSectionProps) => (
  <section id="experience" className="mb-16 max-w-6xl mx-auto scroll-mt-24">
    <h2 className="text-4xl font-bold mb-8">Experiences</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
      {EXPERIENCES.map((exp, index) => (
        <ExperienceCard
          key={index}
          experience={exp}
          index={index}
          onMoreClick={onMoreClick}
        />
      ))}
    </div>
  </section>
);