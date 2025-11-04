import React from 'react';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="Обо мне" className="bg-brand-bg-light">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-300 leading-relaxed">
          Я — Рамиз Ортиков, full-stack разработчик. 
          Моя страсть — это создание интуитивно понятных пользовательских интерфейсов с помощью React/Next.js и мощных бэкенд-сервисов на Python/FastAPI. 
          Я постоянно изучаю новые технологии и стремлюсь применять их для решения реальных задач. Моя цель — расти как профессионал и вносить вклад в создание инновационных и качественных продуктов.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
