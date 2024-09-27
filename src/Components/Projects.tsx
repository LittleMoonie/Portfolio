import React from 'react';
import { Box, Typography, Card, CardContent, IconButton, Grid } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Spotify Profile',
    description:
      'Web app for visualizing personalized Spotify data. View your top artists, tracks, and more. Save new playlists based on recommendations.',
    image: '/images/spotify-profile.jpg', // Replace with an appropriate image
    link: 'https://github.com/your-profile/spotify-profile',
    skills: ['React', 'Express', 'Spotify API', 'Heroku'],
  },
  {
    title: 'Halcyon Theme',
    description:
      'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Over 100,000 installs.',
    image: '/images/halcyon-theme.jpg', // Replace with an appropriate image
    link: 'https://github.com/your-profile/halcyon-theme',
    skills: ['VS Code', 'Theme', 'JavaScript', 'CSS'],
  },
  {
    title: 'Headless CMS',
    description:
      'Building a headless CMS from scratch for seamless integration with front-end frameworks.',
    image: '/images/headless-cms.jpg', // Replace with an appropriate image
    link: 'https://github.com/your-profile/headless-cms',
    skills: ['React', 'Node.js', 'GraphQL', 'CMS'],
  },
  // Additional projects can be added here...
];

const Project: React.FC = () => {
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
      {/* Column Layout for Projects */}
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <Card
            sx={{
              width: '100%',
              maxWidth: '900px', // Maximum width for the project card
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#1F2937',
              color: '#E5E7EB',
              borderRadius: '15px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(145deg, #374151, #1F2937)', // Slight gradient change on hover
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
              },
              mb: 4, // Spacing between project cards
            }}
          >
            {/* Project Image */}
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '15px 0 0 15px', // Rounded corners on the left side
                display: { xs: 'none', sm: 'block' }, // Hide image on small screens
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
                  {project.title}
                </Typography>
                {project.link && (
                  <IconButton
                    component="a"
                    href={project.link}
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
                {project.description}
              </Typography>

              {/* Skills Used */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {project.skills.map((skill, skillIndex) => (
                  <Typography
                    key={skillIndex}
                    sx={{
                      backgroundColor: '#2563EB',
                      color: '#E5E7EB',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}
                  >
                    {skill}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  );
};

export default Project;
