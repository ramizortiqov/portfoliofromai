import React from 'react';
import type { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons/SocialIcons';
import SectionWrapper from './SectionWrapper';

const projects: Project[] = [
  {
    title: 'E-commerce Платформа "TechStore"',
    description: 'Разработал интернет-магазин электроники с полным циклом покупки. Реализовал корзину с сохранением состояния, JWT-аутентификацию и админ-панель для управления заказами. Оптимизировал запросы к БД, что снизило время загрузки каталога на 40%.',
    image: 'https://picsum.photos/seed/techstore/600/400',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/ramizortiqov/techstore',
  },
  {
    title: 'Менеджер Задач "Productiv"',
    description: 'Создал приложение для управления проектами с Kanban-досками и drag-and-drop функционалом. Внедрил real-time обновления через WebSocket и систему уведомлений. Приложение поддерживает совместную работу команд до 50 пользователей.',
    image: 'https://picsum.photos/seed/productiv/600/400',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'TypeScript'],
    liveUrl: '#',
    repoUrl: 'https://github.com/ramizortiqov/productiv',
  },
  {
    title: 'Персональный Блог "DevInsights"',
    description: 'Построил блог-платформу с Markdown-редактором и системой комментариев. Реализовал SSR для SEO-оптимизации, что улучшило индексацию страниц на 60%. Добавил полнотекстовый поиск и систему тегов для удобной навигации.',
    image: 'https://picsum.photos/seed/devinsights/600/400',
    stack: ['React', 'Python', 'Flask', 'SQLite'],
    repoUrl: 'https://github.com/ramizortiqov/devinsights',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-brand-bg-dark rounded-lg border border-brand-bg-lighter overflow-hidden group hover:border-brand-accent hover:shadow-lg hover:shadow-brand-accent/20 transition-all duration-300">
        <div className="overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-brand-text-primary mb-3 group-hover:text-brand-accent transition-colors">{project.title}</h3>
            <p className="text-brand-text-secondary mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map(tech => (
                    <span key={tech} className="bg-brand-bg-lighter text-brand-accent text-sm font-medium px-3 py-1 rounded-full border border-brand-bg-lighter hover:border-brand-accent transition-colors">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex items-center space-x-4">
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-brand-accent transition-colors duration-300 flex items-center gap-2 font-medium">
                        <ExternalLinkIcon />
                        <span>Live Demo</span>
                    </a>
                )}
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary hover:text-brand-accent transition-colors duration-300 flex items-center gap-2 font-medium">
                    <GithubIcon />
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    </div>
);


const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Проекты" className="bg-brand-bg-light">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;