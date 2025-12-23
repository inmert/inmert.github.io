import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ExperienceModal } from './components/ExperienceModal';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { SkillsSection } from './components/SkillsSection';
import { ExtrasSection } from './components/ExtrasSection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="pt-40 p-8">
        <AboutSection />
        <ExperienceSection onMoreClick={setModalIndex} />
        <ProjectsSection />
        <ResearchSection />
        <SkillsSection />
        <ExtrasSection />
      </main>

      <ExperienceModal modalIndex={modalIndex} onClose={() => setModalIndex(null)} />
    </div>
  );
}

export default App;