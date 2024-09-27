// src/components/Navigation/SocialMediaIcons.tsx

import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const SocialMediaIcons: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start', // Align icons to the left
        alignItems: 'center',
        gap: 2, // Space between icons
        mt: 2, // Margin top for spacing
      }}
    >
      <Tooltip title="LinkedIn">
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn profile
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#E5E7EB', '&:hover': { color: '#60A5FA' } }}
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="GitHub">
        <IconButton
          component="a"
          href="https://github.com/your-profile" // Replace with your GitHub profile
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#E5E7EB', '&:hover': { color: '#60A5FA' } }}
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Twitter">
        <IconButton
          component="a"
          href="https://twitter.com/your-profile" // Replace with your Twitter profile
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#E5E7EB', '&:hover': { color: '#60A5FA' } }}
        >
          <TwitterIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SocialMediaIcons;
