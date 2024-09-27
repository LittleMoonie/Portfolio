// src/components/Experiences/index.tsx

import React from 'react';
import { Box } from '@mui/material';
import ExperienceCard from './ExperienceCard';
import DownloadResume from './DownloadResume';

const experienceData = [
  {
    date: 'Apr 2024 - Aug 2024',
    position: 'Software Development Intern',
    company: 'Deloitte',
    link: 'https://www.deloitte.com/lu/en.html',
    description: "During my internship at Deloitte Luxembourg in Software Development, I worked on the development of a clients' and partners' document management system within a financial project.",
    skills: ['React', 'TypeScript', 'ASP.NET Core', 'MSSQL', 'API Integration', 'DevOps', 'Git', 'CSS', 'Full Stack Development', 'SCRUM'],
  },
  {
    date: 'May 2023 - Jun 2023',
    position: 'Web Developer Intern',
    company: 'NaissanceOCalme',
    link: '#', // Replace with actual link if available
    description: "Led the full stack development of the company's website using HTML5, PHP, SQL, JavaScript, and SCSS. Introduced an Agile workflow with SCRUM, ensuring efficient project management and regular feedback loops.",
    skills: ['HTML5', 'PHP', 'SQL', 'JavaScript', 'SCSS (CSS)', 'Agile', 'SCRUM'],
  },
];

const Experiences: React.FC = () => {
  return (
    <Box sx={{ paddingBottom: 4, mb: 2 }}>
      {experienceData.map((experience, index) => (
        <ExperienceCard
          key={index}
          date={experience.date}
          position={experience.position}
          company={experience.company}
          link={experience.link}
          description={experience.description}
          skills={experience.skills}
        />
      ))}
      {/* Download Resume Section */}
      <DownloadResume />
    </Box>
  );
};

export default Experiences;
