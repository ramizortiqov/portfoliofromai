import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number; // Percentage from 0 to 100
}

export interface Project {
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl?: string;
  repoUrl: string;
}

export interface ContactInfo {
    icon: React.ReactNode;
    text: string;
    link: string;
}
