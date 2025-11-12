import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, className, children }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-text-primary mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full shadow-lg shadow-brand-accent/50"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
