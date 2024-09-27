// src/components/Education/LinkedInLink.tsx

import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LinkedInLink: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" mt={4} justifyContent="center">
      <Link
        href="https://www.linkedin.com/in/your-linkedin-username" // Replace with your actual LinkedIn profile URL
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: 'none',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          fontSize: '18px',
          fontWeight: 'bold',
          '&:hover': {
            color: '#60A5FA',
            textDecoration: 'underline',
          },
        }}
      >
        Connect with me on LinkedIn <LinkedInIcon sx={{ marginLeft: '8px' }} />
      </Link>
    </Box>
  );
};

export default LinkedInLink;
