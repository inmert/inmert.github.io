import { SKILLS } from '../data/skills';

export const SkillsSection = () => (
  <section id="skills" className="mb-16 max-w-6xl mx-auto scroll-mt-24">
    <h2 className="text-4xl font-bold mb-8">Skills</h2>
    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-lg font-bold mb-3 text-red-500">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="px-2.5 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center gap-1.5">
                  {skill.icon && <skill.icon size={14} style={{ color: skill.color }} />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);