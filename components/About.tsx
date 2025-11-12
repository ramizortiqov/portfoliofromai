import React from 'react';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="Обо мне" className="bg-brand-bg-light">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-brand-text-secondary leading-relaxed mb-6 text-center">
          Full-stack разработчик, специализирующийся на создании быстрых и интуитивных веб-приложений.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-brand-bg-dark p-6 rounded-lg border border-brand-bg-lighter hover:border-brand-accent transition-colors duration-300">
            <h3 className="text-xl font-bold text-brand-accent mb-3">Frontend</h3>
            <p className="text-brand-text-secondary">
              Разрабатываю адаптивные интерфейсы с React и Next.js, уделяя внимание производительности и доступности.
              Применяю современные подходы к стилизации и анимациям.
            </p>
          </div>
          <div className="bg-brand-bg-dark p-6 rounded-lg border border-brand-bg-lighter hover:border-brand-accent transition-colors duration-300">
            <h3 className="text-xl font-bold text-brand-accent mb-3">Backend</h3>
            <p className="text-brand-text-secondary">
              Создаю масштабируемые API на Python/FastAPI и Node.js.
              Проектирую базы данных и оптимизирую запросы для высокой производительности.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
