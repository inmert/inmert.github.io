import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import type { SocialLink } from '../types';

export const SOCIAL_LINKS: SocialLink[] = [
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