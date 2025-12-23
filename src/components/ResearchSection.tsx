import { ResearchPaper } from './ResearchPaper';
import { RESEARCH } from '../data/research';

export const ResearchSection = () => (
  <section id="research" className="mb-16 max-w-6xl mx-auto scroll-mt-24">
    <h2 className="text-4xl font-bold mb-8">Research</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {RESEARCH.map((paper, index) => (
        <ResearchPaper key={index} paper={paper} />
      ))}
    </div>
  </section>
);