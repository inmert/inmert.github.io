import { SOCIAL_LINKS } from '../data/socialLinks';

export const Footer = () => (
  <footer className="bg-black text-white py-12">
    <div className="max-w-6xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Brand & Description */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            portfolio<span className="text-red-500">.</span>Priyan
          </h3>
          <p className="text-gray-400 mb-4">
            Co-building the future of robotics and AI at Arachnid Systems. 
            Crafting intelligent systems that solve real-world challenges.
          </p>
          <p className="text-gray-400">
            📍 Merritt Island, Florida, United States
          </p>
        </div>

        {/* Contact & Social */}
        <div className="md:ml-auto">
          <h4 className="text-lg font-bold mb-4">Connect</h4>
          <div className="space-y-3 mb-4">
            <p className="text-gray-400">
              📧 <a href="mailto:priyan@arachnidsys.com" className="hover:text-red-500 transition-colors">
                priyan@arachnidsys.com
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center justify-center w-10 h-10 ${link.bgColor} text-white rounded-lg ${link.hoverColor} transition-colors`}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Priyan Rai. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm">
          Made with ❤️ using React, TypeScript & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
);