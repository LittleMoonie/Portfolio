// src/pages/NotFound.tsx

import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Asteroid from '../Components/ErrorPage/Asteroid';
import Rocket from '../Components/ErrorPage/Rocket';
import Alien from '../Components/ErrorPage/Alien';
import Moon from '../Components/ErrorPage/Moon';
import Planet from '../Components/ErrorPage/Planet';
import Stars from '../Components/ErrorPage/Stars';

const NotFound: React.FC = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(#12100E, #2B4162)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Error 404 Text */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '4rem', md: '8rem' },
          fontWeight: 'bold',
          color: '#ffffff',
          textAlign: 'left',
          transform: 'rotate(-5deg)',
          position: 'absolute',
          top: { xs: '10%', md: '20%' },
          left: '10%',
          zIndex: 2,
          userSelect: 'none',
        }}
      >
        Error 404
      </Typography>

      {/* Components */}
      <Moon />
      <Planet screenSize={screenSize} />
      <Alien screenSize={screenSize} />
      <Rocket screenSize={screenSize} />
      <Asteroid screenSize={screenSize} />
      <Stars />

      {/* Return to Home Link */}
      <Link
        to="/"
        style={{
          marginTop: '50px',
          color: '#ffffff',
          textDecoration: 'none',
          fontSize: '24px',
          fontWeight: 'bold',
          zIndex: 2,
        }}
      >
        Return to Home
      </Link>
    </Box>
  );
};

export default NotFound;
