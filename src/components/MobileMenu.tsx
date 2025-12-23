import { FaTimes } from 'react-icons/fa';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MENU_SECTIONS = ['about', 'skills', 'experience', 'projects', 'research', 'extras', 'contact'];

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) => (
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