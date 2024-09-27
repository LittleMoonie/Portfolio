// src/components/Layout.tsx
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import Greetings from './Greetings';
import Content from './Content';
import { Canvas } from '@react-three/fiber';
import { Particles } from './Particles';
import RocketAnimation from './RocketAnimation';

const Layout: React.FC = () => {
  const [showContent, setShowContent] = useState(false); // State to track visibility of content

  // Callback function to show content after animation is complete
  const handleAnimationComplete = () => {
    setShowContent(true); // Show content once animation is done
  };

  return (
    <Box sx={{ position: 'relative', height: '100%', background: 'linear-gradient(#12100E, #2B4162)' }}>
      {/* Rocket Animation Component */}
      <RocketAnimation onComplete={handleAnimationComplete} />

      {/* Main Content Area */}
      <Box
        sx={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 3,
          position: 'relative',
          opacity: showContent ? 1 : 0, // Control opacity based on animation state
          transition: 'opacity 1.5s ease-in-out', // Smooth fade-in effect
          zIndex: 100, // Keep the content above the rocket animation
        }}
      >
        {/* Canvas for Particles (Background) */}
        <Grid
          container
          spacing={2}
          sx={{
            height: '100%',
            width: '100%',
            color: '#e0e0e0',
            fontFamily: 'Inter, sans-serif',
            zIndex: 100,
          }}
        >
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              zIndex: 100,
            }}
          >
            <Greetings />
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            sx={{
              height: '100%',
              overflowY: 'auto',
              maxHeight: '100%',
              padding: 2,
              color: '#e0e0e0',
              zIndex: 100,
            }}
          >
            <Content />
          </Grid>
        </Grid>
        <Canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
          camera={{ position: [0, 0, 1] }}
        >
          <Particles />
        </Canvas>
      </Box>
    </Box>
  );
};

export default Layout;
