// src/components/Stars.tsx

import React from 'react';
import { Box } from '@mui/material';
import Lottie from 'lottie-react';
import starsAnimation from '../../lottiefiles/stars.json';

const Stars: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.3, // Make stars subtle in the background
      }}
    >
      <Lottie animationData={starsAnimation} loop={true} />
    </Box>
  );
};

export default Stars;
