import { SOCIAL_LINKS } from '../data/socialLinks';

export const SocialLinks = () => (
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