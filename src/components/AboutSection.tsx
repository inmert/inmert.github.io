import { SocialLinks } from './SocialLinks';
import profileImage from '../assets/priyan.jpeg';

export const AboutSection = () => (
  <section id="about" className="mt-8 mb-16 scroll-mt-32">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
      <div>
        <div className="w-full h-96 rounded-2xl overflow-hidden">
          <img
            src={profileImage}
            alt="Priyan Rai"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        <h2 className="text-red-500 text-4xl font-bold mb-4">Hi, I'm Priyan</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Co-building Arachnid Systems, where we're engineering modular robots aiding deployable surface inspections for aviation, infrastructure, and industrial diagnostics. 
           From smart systems to insights, we're rethinking how technology adapts to real-world inspection challenges.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          By day, I craft elegant code, tame containers, and build models that actually converge.
          I work at the intersection of cloud-native systems, AI, and design where data meets scale. 
        </p>
        <SocialLinks />
      </div>
    </div>
  </section>
);