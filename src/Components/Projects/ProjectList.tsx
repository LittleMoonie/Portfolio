// src/components/Projects/ProjectList.tsx

import React from 'react';
import { Box } from '@mui/material';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'SolaLunaire',
    description:
      'Gacha idle game playable on Discord, mobile, and website. Engage in strategic gameplay with collectible characters, quests, and events across multiple platforms.',
    image: 'https://via.placeholder.com/150', // Replace with an appropriate placeholder or project image
    link: '/SolaLunaire', // Internal link to the SolaLunaire page
    skills: ['React', 'C#', 'ASP .NET', 'Discord API', 'Game Design', 'REST API', 'Swaggger'],
  },
  {
    title: 'GitHub Project Repository',
    description:
      'A comprehensive repository of all my web projects hosted on GitHub. Explore a variety of applications, themes, and libraries that I have built over time.',
    image: 'https://via.placeholder.com/150', // Replace with an appropriate placeholder or project image
    link: 'https://github.com/your-profile', // Replace with your GitHub profile or projects page link
    skills: ['JavaScript', 'React', 'GitHub Pages', 'API Integration'],
  },
];

const ProjectList: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          skills={project.skills}
        />
      ))}
    </Box>
  );
};

export default ProjectList;
