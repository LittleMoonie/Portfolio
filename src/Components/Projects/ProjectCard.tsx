// src/components/Projects/ProjectCard.tsx

import React from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';
import SkillsChips from '../SkillsChips'; // Reuse the SkillsChips component

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, skills }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: '900px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#1F2937',
          color: '#E5E7EB',
          borderRadius: '15px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            background: 'linear-gradient(145deg, #374151, #1F2937)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
          },
          mb: 4,
        }}
      >
        {/* Project Image Placeholder */} 
        <Box
          component="img"
          src={image} // Placeholder image
          alt={title}
          sx={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '15px 0 0 15px',
            display: { xs: 'none', sm: 'block' },
          }}
        />

        {/* Project Content */}
        <CardContent
          sx={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          {/* Title and Link */}
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                fontSize: '18px',
                mb: 1,
                color: '#60A5FA',
              }}
            >
              {title}
            </Typography>
            {link && (
              <IconButton
                component="a"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open project link"
                sx={{ color: '#60A5FA' }}
              >
                <LaunchIcon />
              </IconButton>
            )}
          </Box>

          {/* Project Description */}
          <Typography
            variant="body2"
            sx={{
              fontSize: '15px',
              color: '#a0a0a0',
              mb: 2,
            }}
          >
            {description}
          </Typography>

          {/* Skills Used */}
          <SkillsChips skills={skills} />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
