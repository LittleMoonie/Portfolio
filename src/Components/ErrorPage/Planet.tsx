// src/components/Planet.tsx

import React from 'react';
import { Box } from '@mui/material';
import Lottie from 'lottie-react';
import bluePlanetAnimation from '../../lottiefiles/blueplanet.json';
import darkBluePlanetAnimation from '../../lottiefiles/darkblueplanet.json';
import orangePlanetAnimation from '../../lottiefiles/orangeplanet.json';

interface PlanetProps {
  screenSize: { width: number; height: number };
}

const Planet: React.FC<PlanetProps> = () => {
  return (
    <>
      {/* Blue Planet */}
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: { xs: '5%', md: '10%' },
          zIndex: 0,
        }}
      >
        <Lottie animationData={bluePlanetAnimation} loop={true} style={{ width: '80px', height: '80px' }} />
      </Box>

      {/* Dark Blue Planet */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          right: { xs: '15%', md: '28%' },
          zIndex: 0,
        }}
      >
        <Lottie animationData={darkBluePlanetAnimation} loop={true} style={{ width: '100px', height: '100px' }} />
      </Box>

      {/* Orange Planet */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: { xs: '50%', md: '65%' },
          zIndex: 0,
        }}
      >
        <Lottie animationData={orangePlanetAnimation} loop={true} style={{ width: '90px', height: '90px' }} />
      </Box>
    </>
  );
};

export default Planet;
