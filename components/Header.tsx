import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-gray-300 hover:text-brand-accent transition-colors duration-300 text-lg">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    closeMenu();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg-light/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={handleNavClick} className="text-2xl font-bold text-white hover:text-brand-accent transition-colors duration-300">
          RO
        </a>
        <nav className="hidden md:flex space-x-8">
          <NavLink href="#about" onClick={handleNavClick}>Обо мне</NavLink>
          <NavLink href="#skills" onClick={handleNavClick}>Навыки</NavLink>
          <NavLink href="#projects" onClick={handleNavClick}>Проекты</NavLink>
          <NavLink href="#contact" onClick={handleNavClick}>Контакты</NavLink>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-brand-bg-light/95 backdrop-blur-lg">
          <nav className="flex flex-col items-center space-y-6 py-8">
            <NavLink href="#about" onClick={handleNavClick}>Обо мне</NavLink>
            <NavLink href="#skills" onClick={handleNavClick}>Навыки</NavLink>
            <NavLink href="#projects" onClick={handleNavClick}>Проекты</NavLink>
            <NavLink href="#contact" onClick={handleNavClick}>Контакты</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;