import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion'; // For smooth animations

const projects = [
  {
    title: 'Project A',
    description: 'A full-stack web application built using React and Node.js.',
    hoverBackground: '/images/projectA-hover.jpg', // Hover background image
    defaultBackground: '/images/projectA.jpg', // Default background image
  },
  {
    title: 'Project B',
    description: 'An e-commerce platform with secure payment integration.',
    hoverBackground: '/images/projectB-hover.jpg',
    defaultBackground: '/images/projectB.jpg',
  },
  // Add more projects here...
];

const HoverProjectCard: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
      }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.001 }} 
          transition={{ duration: 0.2 }}
        >
          <Card
            sx={{
              position: 'relative',
              height: '300px',
              backgroundImage: `url(${project.defaultBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              overflow: 'hidden',
              '&:hover': {
                backgroundImage: `url(${project.hoverBackground})`,
                transition: 'background-image 0.5s ease-in-out',
              },
            }}
          >
            <CardContent
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '24px',
                  mb: 1,
                }}
              >
                {project.title}
              </Typography>
              <Typography variant="body1">{project.description}</Typography>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  );
};

export default HoverProjectCard;
