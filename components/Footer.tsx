import React from 'react';
import { GithubIcon, TelegramIcon, InstagramIcon } from './icons/SocialIcons';

const SocialLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors duration-300">
        {children}
    </a>
)

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bg-light py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
            <SocialLink href="https://github.com/ramizortiqov"><GithubIcon className="w-8 h-8"/></SocialLink>
            <SocialLink href="https://t.me/ramizortikov"><TelegramIcon className="w-8 h-8"/></SocialLink>
            <SocialLink href="https://instagram.com/ramiz_ortiqov"><InstagramIcon className="w-8 h-8"/></SocialLink>
        </div>
        <p>&copy; {new Date().getFullYear()} Рамиз Ортиков. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;