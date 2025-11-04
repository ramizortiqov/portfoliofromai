import React from 'react';
import type { Skill } from '../types';
import { HtmlIcon, CssIcon, JsIcon, ReactIcon, NextjsIcon, NodejsIcon, PythonIcon, FastApiIcon } from './icons/TechIcons';
import SectionWrapper from './SectionWrapper';

const skills: Skill[] = [
  { name: 'HTML5', icon: <HtmlIcon />, level: 95 },
  { name: 'CSS3', icon: <CssIcon />, level: 90 },
  { name: 'JavaScript', icon: <JsIcon />, level: 85 },
  { name: 'React', icon: <ReactIcon />, level: 90 },
  { name: 'Next.js', icon: <NextjsIcon />, level: 80 },
  { name: 'Node.js', icon: <NodejsIcon />, level: 70 },
  { name: 'Python', icon: <PythonIcon />, level: 85 },
  { name: 'FastAPI', icon: <FastApiIcon />, level: 75 },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="bg-brand-bg-light p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="w-16 h-16 mb-4 text-brand-accent">{skill.icon}</div>
        <h3 className="text-xl font-semibold text-white mb-3">{skill.name}</h3>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-brand-accent h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
        </div>
    </div>
);

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Навыки" className="bg-brand-bg-dark">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
