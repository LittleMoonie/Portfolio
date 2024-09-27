// src/components/Alien.tsx

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Lottie from 'lottie-react';
import alienAnimation from '../../lottiefiles/alien.json';

interface AlienProps {
  screenSize: { width: number; height: number };
}

const Alien: React.FC<AlienProps> = ({ screenSize }) => {
  const [alienPosition, setAlienPosition] = useState({ x: 0, y: 0 });

  // Move the alien randomly across the screen
  useEffect(() => {
    const interval = setInterval(() => {
      setAlienPosition({
        x: Math.random() * (screenSize.width - 100),
        y: Math.random() * (screenSize.height - 100),
      });
    }, 3000); // Change position every 3 seconds

    return () => clearInterval(interval);
  }, [screenSize]);

  return (
    <Box
      sx={{
        position: 'absolute',
        width: { xs: '50px', md: '100px' }, // Responsive width and height
        height: { xs: '50px', md: '100px' },
        top: alienPosition.y,
        left: alienPosition.x,
        transition: 'top 1s ease, left 1s ease', // Smooth transition for alien movement
        zIndex: 2,
      }}
    >
      <Lottie animationData={alienAnimation} loop={true} />
    </Box>
  );
};

export default Alien;
