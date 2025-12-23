import type { ResearchPaper as ResearchPaperType } from '../types';

interface ResearchPaperProps {
  paper: ResearchPaperType;
}

export const ResearchPaper = ({ paper }: ResearchPaperProps) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col h-full">
    <h3 className="text-lg font-bold mb-2">{paper.title}</h3>
    <p className="text-red-500 font-semibold mb-2">{paper.venue}</p>
    <p className="text-gray-500 text-sm mb-3">{paper.authors}</p>
    <p className="text-gray-700 mb-2">{paper.description}</p>
    
    <div className="mt-auto pt-5">
      {paper.link !== "#" && (
        <a
          href={paper.link}
          className="inline-block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Full Paper →
        </a>
      )}
    </div>
  </div>
);