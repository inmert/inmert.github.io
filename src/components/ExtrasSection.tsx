import { EXTRAS } from '../data/extras';

export const ExtrasSection = () => (
  <section id="extras" className="mb-16 max-w-6xl mx-auto scroll-mt-24">
    <h2 className="text-4xl font-bold mb-8">Extras</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {EXTRAS.map((extra) => (
        <div
          key={extra.title}
          className="bg-white border border-gray-200 border-t-4 border-t-red-500 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 shrink-0 bg-red-50 text-red-500 rounded-lg flex items-center justify-center">
              <extra.icon size={20} />
            </div>
            <h3 className="text-xl font-bold leading-tight">{extra.title}</h3>
          </div>
          <ul className="space-y-3">
            {extra.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 leading-snug">
                <span className="mt-1.75 w-1.5 h-1.5 shrink-0 rounded-full bg-red-500" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
