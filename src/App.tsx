import { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from 'react-icons/fa';
import {
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiGo,
  SiPostgresql,
  SiReact,
  SiTensorflow,
  SiPytorch,
  SiUnrealengine,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiMongodb,
  SiRedis
} from 'react-icons/si';

import profileImage from './assets/priyan.jpeg';
import arachnidLogo from './assets/arachnid.png';
import nokiaLogo from './assets/nokia.jpg';
import unrealLogo from './assets/unreal.png';
import shpLogo from './assets/shp.jpg';
import ucLogo from './assets/uc.png';
import genericBG from './assets/background.jpg';

// Types
interface Experience {
  logo: string;
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  onMoreClick: (index: number) => void;
}

interface ExperienceSectionProps {
  onMoreClick: (index: number) => void;
}

interface ExperienceModalProps {
  modalIndex: number | null;
  onClose: () => void;
}

// Constants
const MENU_SECTIONS = ['about', 'experience', 'projects', 'research', 'skills', 'extras', 'contact'];

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/inmert/',
    icon: FaLinkedin,
    bgColor: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
    label: 'LinkedIn'
  },
  {
    href: 'https://github.com/inmert',
    icon: FaGithub,
    bgColor: 'bg-gray-800',
    hoverColor: 'hover:bg-gray-900',
    label: 'GitHub'
  },
  {
    href: 'mailto:priyan@arachnidsys.com',
    icon: FaEnvelope,
    bgColor: 'bg-red-500',
    hoverColor: 'hover:bg-red-600',
    label: 'Email'
  }
];

const PROJECTS = [
  {
    title: "Modular Robotic Inspection System",
    description: "End-to-end robotic platform for automated aircraft and infrastructure inspection with real-time sensor fusion.",
    tags: ["Robotics", "Computer Vision", "AWS", "Python"],
    link: "#",
    image: genericBG
  },
  {
    title: "AntBox Simulator",
    description: "Published game on itch.io featuring realistic ant colony simulation with procedural behavior systems.",
    tags: ["Unreal Engine", "C++", "Game Design"],
    link: "https://itch.io",
    image: genericBG
  },
  {
    title: "Cloud-Native ML Pipeline",
    description: "Scalable machine learning pipeline for anomaly detection processing millions of data points daily.",
    tags: ["Kubernetes", "TensorFlow", "PostgreSQL"],
    link: "#",
    image: genericBG
  },
  {
    title: "Distributed Sensor Network",
    description: "IoT platform for real-time data collection and analysis across multiple edge devices.",
    tags: ["MQTT", "TimescaleDB", "React"],
    link: "#",
    image: genericBG
  }
];

const RESEARCH = [
  {
    title: "Autonomous Navigation in Constrained Environments",
    venue: "IEEE Robotics Conference 2024",
    description: "Novel approach to path planning for inspection robots in tight spaces using reinforcement learning.",
    authors: "P. Rai, et al.",
    link: "#"
  },
  {
    title: "Real-time Anomaly Detection in Industrial Systems",
    venue: "Journal of AI Research 2023",
    description: "Machine learning framework for predictive maintenance in telecommunications infrastructure.",
    authors: "P. Rai, et al.",
    link: "#"
  },
  {
    title: "Sensor Fusion for Robotic Inspection",
    venue: "Robotics and Automation Letters 2023",
    description: "Multi-modal sensor integration techniques for improved defect detection accuracy.",
    authors: "P. Rai, et al.",
    link: "#"
  }
];

const SKILLS = {
  "Languages": [
    { name: "Python", icon: SiPython },
    { name: "C++", icon: SiCplusplus },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Go", icon: SiGo },
    { name: "SQL", icon: SiPostgresql }
  ],
  "Frameworks": [
    { name: "React", icon: SiReact },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "ROS", icon: null },
    { name: "Unreal Engine", icon: SiUnrealengine }
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: SiAmazon },
    { name: "Docker", icon: SiDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "CI/CD", icon: null },
    { name: "Terraform", icon: SiTerraform }
  ],
  "Robotics & AI": [
    { name: "Computer Vision", icon: null },
    { name: "Path Planning", icon: null },
    { name: "Sensor Fusion", icon: null },
    { name: "ML Ops", icon: null }
  ],
  "Databases": [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Redis", icon: SiRedis },
    { name: "TimescaleDB", icon: null }
  ]
};

const EXTRAS = [
  {
    title: "Open Source Contributions",
    items: [
      "Core contributor to ROS navigation stack",
      "Maintained robotics simulation packages",
      "Created ML tooling libraries for computer vision"
    ]
  },
  {
    title: "Speaking & Teaching",
    items: [
      "Guest lecturer at UC on robotics and AI",
      "Speaker at Robotics Summit 2024",
      "Workshop facilitator for cloud-native architectures"
    ]
  },
  {
    title: "Certifications & Awards",
    items: [
      "AWS Solutions Architect Professional",
      "Best Innovation Award - Tech Summit 2023",
      "Kubernetes Certified Administrator"
    ]
  }
];

const EXPERIENCES = [
  {
    logo: arachnidLogo,
    title: "Co-Founder | Chief Operating Officer",
    company: "Arachnid Systems",
    period: "2023 – Present",
    bullets: [
      "Designed modular robotic inspection systems for aviation and infrastructure.",
      "Built cloud-native services and sensor data pipelines.",
      "Worked across robotics, AI, and distributed systems.",
      "Managed cross-functional teams and product roadmaps.",
      "Implemented CI/CD pipelines for robotics software."
    ]
  },
  {
    logo: nokiaLogo,
    title: "Senior Software Architect",
    company: "Nokia",
    period: "2021 – 2023",
    bullets: [
      "Developed ML models for anomaly detection and automation.",
      "Worked with large-scale datasets and production AI pipelines.",
      "Collaborated with customers to deploy scalable AI solutions.",
      "Optimized cloud-native microservices for performance and reliability."
    ]
  },
  {
    logo: unrealLogo,
    title: "Freelance Video Game Developer",
    company: "Unreal Engine UG",
    period: "2023 – Present",
    bullets: [
      "Designed and published AntBox Simulator on itch.io.",
      "Implemented game mechanics and physics in Unreal Engine.",
      "Created modular assets and reusable Blueprints.",
      "Optimized performance for low-spec devices."
    ]
  },
  {
    logo: shpLogo,
    title: "Software Architect",
    company: "SHP",
    period: "2023 – Present",
    bullets: [
      "Designed modular robotic inspection systems for aviation and infrastructure.",
      "Built cloud-native services and sensor data pipelines.",
      "Worked across robotics, AI, and distributed systems."
    ]
  },
  {
    logo: ucLogo,
    title: "Research Engineer",
    company: "UC CEAS",
    period: "2023 – Present",
    bullets: [
      "Designed modular robotic inspection systems for aviation and infrastructure.",
      "Built cloud-native services and sensor data pipelines.",
      "Worked across robotics, AI, and distributed systems."
    ]
  }
];

// Components
const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => (
  <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
    <div className="flex items-center justify-between px-6 py-6 md:px-0 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-black">
        portfolio<span className="text-red-500">.</span>Priyan
      </h1>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-black hover:text-red-500 transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>
    </div>
  </header>
);

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => (
  <>
    {isMenuOpen && (
      <div
        className="fixed inset-0 bg-black opacity-80 z-40"
        onClick={() => setIsMenuOpen(false)}
      />
    )}

    <nav
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-6">
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-black hover:text-red-500 transition-colors"
          aria-label="Close menu"
        >
          <FaTimes size={28} />
        </button>

        <ul className="flex flex-col mt-16 space-y-6">
          {MENU_SECTIONS.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="text-lg text-black hover:text-red-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </>
);

const SocialLinks = () => (
  <div className="flex gap-4">
    {SOCIAL_LINKS.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`flex items-center justify-center w-12 h-12 ${link.bgColor} text-white rounded-lg ${link.hoverColor} transition-colors`}
        aria-label={link.label}
      >
        <link.icon size={24} />
      </a>
    ))}
  </div>
);

const AboutSection = () => (
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
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Priyan</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Co-building Arachnid Systems, where we’re engineering modular robots aiding deployable surface inspections for aviation, infrastructure, and industrial diagnostics. 
           From smart systems to insights, we’re rethinking how technology adapts to real-world inspection challenges.
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

const ExperienceCard = ({ experience, index, onMoreClick }: ExperienceCardProps) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
      <div className="shrink-0">
        <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
          <img src={experience.logo} alt={`${experience.company} logo`} className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className="text-red-500 font-semibold">
          {experience.company} · <span className="text-gray-500 font-normal">{experience.period}</span>
        </p>
      </div>
    </div>

    <ul className="list-disc list-inside text-gray-700 space-y-1">
      {experience.bullets.slice(0, 3).map((bullet, i) => (
        <li key={i}>{bullet}</li>
      ))}
    </ul>

    {experience.bullets.length > 3 && (
      <button
        className="mt-2 text-red-500 font-semibold hover:underline"
        onClick={() => onMoreClick(index)}
      >
        More
      </button>
    )}
  </div>
);

const ExperienceSection = ({ onMoreClick }: ExperienceSectionProps) => (
  <section id="experience" className="mb-16 max-w-6xl mx-auto scroll-mt-24">
    <h2 className="text-4xl font-bold mb-8">Experiences</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

const ExperienceModal = ({ modalIndex, onClose }: ExperienceModalProps) => {
  if (modalIndex === null) return null;

  const experience = EXPERIENCES[modalIndex];

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-80 z-50" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className="bg-white rounded-lg max-w-lg w-full p-6 relative pointer-events-auto">
          <button
            className="absolute top-4 right-4 text-black hover:text-red-500"
            onClick={onClose}
          >
            <FaTimes size={24} />
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="text-red-500 font-semibold">
                {experience.company} · <span className="text-gray-500 font-normal">{experience.period}</span>
              </p>
            </div>
          </div>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {experience.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => (
  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="w-full h-48 bg-gray-100 overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        className="text-red-500 font-semibold hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </div>
  </div>
);

const ProjectsSection = () => (
  <section id="projects" className="mb-16 max-w-6xl mx-auto scroll-mt-24">
    <h2 className="text-4xl font-bold mb-8">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

const ResearchPaper = ({ paper }: { paper: typeof RESEARCH[0] }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
    <h3 className="text-xl font-bold mb-2">{paper.title}</h3>
    <p className="text-red-500 font-semibold mb-2">{paper.venue}</p>
    <p className="text-gray-700 mb-2">{paper.description}</p>
    <p className="text-gray-500 text-sm mb-3">{paper.authors}</p>
    <a
      href={paper.link}
      className="text-red-500 font-semibold hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read Paper →
    </a>
  </div>
);

const ResearchSection = () => (
  <section id="research" className="mb-16 max-w-6xl mx-auto scroll-mt-24">
    <h2 className="text-4xl font-bold mb-8">Research</h2>
    <div className="space-y-6">
      {RESEARCH.map((paper, index) => (
        <ResearchPaper key={index} paper={paper} />
      ))}
    </div>
  </section>
);

const SkillsSection = () => (
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

const ExtrasSection = () => (
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

// Main App Component
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