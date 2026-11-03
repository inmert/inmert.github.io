import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../data/socialLinks';

export const Footer = () => (
  <footer id="contact" className="bg-black text-white py-12">
    <div className="max-w-6xl mx-auto px-8 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Brand & Description */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            portfolio<span className="text-red-500">.</span>Priyan
          </h3>
          <p className="text-gray-400 max-w-md">
            Co-building the future of robotics and AI at Arachnid Systems.
            Crafting intelligent systems that solve real-world challenges.
          </p>
        </div>

        {/* Contact & Social */}
        <div className="md:ml-auto">
          <h4 className="text-lg font-bold mb-4">Connect</h4>
          <ul className="space-y-3 mb-5 text-gray-400">
            <li className="flex items-center gap-3">
              <FaEnvelope className="shrink-0 text-red-500" aria-hidden="true" />
              <a href="mailto:priyan@arachnidsys.com" className="hover:text-red-500 transition-colors">
                priyan@arachnidsys.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="shrink-0 text-red-500" aria-hidden="true" />
              Merritt Island, Florida, United States
            </li>
          </ul>
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
      <div className="border-t border-gray-800 pt-8">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Priyan Rai. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
