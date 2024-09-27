// src/components/Asteroid.tsx

import React, { useEffect, useState, useRef } from 'react';
import { Box, keyframes } from '@mui/material';
import Lottie from 'lottie-react';
import asteroidAnimation from '../../lottiefiles/asteroid.json';

// Define keyframes for asteroid movement (ensure it's applied correctly)
const moveAsteroid = keyframes`
  0% { left: 100vw; }   /* Start from outside the right edge of the screen */
  100% { left: -150px; }  /* Move to the left of the screen */
`;

interface AsteroidProps {
  screenSize: { width: number; height: number };
}

const Asteroid: React.FC<AsteroidProps> = ({ screenSize }) => {
  const [asteroids, setAsteroids] = useState<any[]>([]);
  const isMountedRef = useRef(true);

  useEffect(() => {
    console.log("Asteroid component is rendered");
  }, []);

  // Function to spawn a single asteroid with a random y-position
  const spawnAsteroid = () => {
    const randomY = Math.random() * (screenSize.height - 100); // Random y position within screen bounds
    console.log("Spawning asteroid at y:", randomY);
    setAsteroids((prevAsteroids) => [
      ...prevAsteroids,
      {
        x: screenSize.width, // Start off the right edge of the screen
        y: randomY, // Assign random y position
        animationDuration: Math.random() * 10 + 10, // Random duration between 10s and 20s
      },
    ]);
  };

  // Use timeouts to spawn asteroids at random intervals
  useEffect(() => {
    console.log("useEffect for spawning asteroids");
    const asteroidTimers: NodeJS.Timeout[] = [];

    // Spawn 3 asteroids with random delays between 2s and 10s
    for (let i = 0; i < 3; i++) {
      const delay = Math.random() * 8000 + 2000; // Random delay between 2s and 10s
      console.log(`Setting up timer for Asteroid ${i + 1} with delay: ${delay}`);
      const timer = setTimeout(() => {
        spawnAsteroid();
        console.log(`Asteroid ${i + 1} spawned`);
      }, delay);
      asteroidTimers.push(timer);
    }

    return () => {
      console.log("Clearing asteroid timers");
      asteroidTimers.forEach((timer) => clearTimeout(timer));
      isMountedRef.current = false;
    };
  }, [screenSize]);

  // Limit the number of asteroids to a manageable number (e.g., 3 at a time)
  useEffect(() => {
    console.log("Limiting asteroids: ", asteroids.length);
    if (asteroids.length > 3) {
      setAsteroids(asteroids.slice(-3)); // Keep only the last 3 asteroids
    }
  }, [asteroids]);

  return (
    <>
      {asteroids.map((asteroid, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            top: asteroid.y, // Use random y position for each asteroid
            left: asteroid.x,
            animation: `${moveAsteroid} ${asteroid.animationDuration}s linear infinite`, // Random animation speed
            zIndex: 1,
          }}
        >
          {/* Asteroid Animation */}
          <Lottie animationData={asteroidAnimation} loop={true} />
        </Box>
      ))}
    </>
  );
};

export default Asteroid;
