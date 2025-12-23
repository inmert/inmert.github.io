import { SKILLS } from '../data/skills';

export const SkillsSection = () => (
  <section id="skills" className="mb-16 max-w-6xl mx-auto scroll-mt-24">
    <h2 className="text-4xl font-bold mb-8">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(SKILLS).map(([category, skills]) => (
        <div key={category} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-red-500">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full flex items-center gap-2">
                {skill.icon && <skill.icon size={16} />}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);