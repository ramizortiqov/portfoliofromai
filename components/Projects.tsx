import React from 'react';
import type { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons/SocialIcons';
import SectionWrapper from './SectionWrapper';

const projects: Project[] = [
  {
    title: 'E-commerce Платформа "TechStore"',
    description: 'Полнофункциональный интернет-магазин электроники с каталогом товаров, корзиной, аутентификацией пользователей и панелью администратора.',
    image: 'https://picsum.photos/seed/techstore/600/400',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/ramizortiqov/techstore',
  },
  {
    title: 'Менеджер Задач "Productiv"',
    description: 'Веб-приложение для управления задачами и проектами в стиле Kanban. Реализована функция drag-and-drop, создание досок, списков и карточек.',
    image: 'https://picsum.photos/seed/productiv/600/400',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'TypeScript'],
    liveUrl: '#',
    repoUrl: 'https://github.com/ramizortiqov/productiv',
  },
  {
    title: 'Персональный Блог "DevInsights"',
    description: 'Минималистичная блог-платформа с рендерингом Markdown, категориями, тегами и системой комментариев. Оптимизирована для SEO.',
    image: 'https://picsum.photos/seed/devinsights/600/400',
    stack: ['React', 'Python', 'Flask', 'SQLite'],
    repoUrl: 'https://github.com/ramizortiqov/devinsights',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-brand-bg-light rounded-lg shadow-xl overflow-hidden group">
        <div className="overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map(tech => (
                    <span key={tech} className="bg-gray-700 text-brand-accent-light text-sm font-medium px-3 py-1 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex items-center space-x-4">
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-accent transition-colors duration-300 flex items-center gap-2">
                        <ExternalLinkIcon />
                        <span>Live Demo</span>
                    </a>
                )}
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-accent transition-colors duration-300 flex items-center gap-2">
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