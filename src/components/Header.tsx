import { FaBars, FaTimes } from 'react-icons/fa';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => (
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