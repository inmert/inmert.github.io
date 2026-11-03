import { useCallback, useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MobileMenu } from './components/MobileMenu';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ExperienceModal } from './components/ExperienceModal';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { SkillsSection } from './components/SkillsSection';
import { ExtrasSection } from './components/ExtrasSection';
import { Footer } from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => setModalIndex(null), []);

  // Sections only exist after React renders, so honor deep links like /#projects here
  useEffect(() => {
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="pt-40 p-8">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection onMoreClick={setModalIndex} />
        <ProjectsSection />
        <ResearchSection />
        <ExtrasSection />
      </main>
      <Footer />

      <ExperienceModal modalIndex={modalIndex} onClose={closeModal} />
    </div>
  );
}

export default App;