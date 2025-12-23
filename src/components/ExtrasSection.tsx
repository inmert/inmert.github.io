import { EXTRAS } from '../data/extras';

export const ExtrasSection = () => (
  <section id="extras" className="mb-16 max-w-6xl mx-auto scroll-mt-24">
    <h2 className="text-4xl font-bold mb-8">Extras</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {EXTRAS.map((extra, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4">{extra.title}</h3>
          <ul className="space-y-2">
            {extra.items.map((item, i) => (
              <li key={i} className="text-gray-700 flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);