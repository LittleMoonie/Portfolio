import React, { useEffect, useState, useRef } from 'react';
import { Box } from '@mui/material';
import Lottie from 'lottie-react';
import rocketAnimation from '../../lottiefiles/rocket.json';

interface RocketProps {
  screenSize: { width: number; height: number };
}

const Rocket: React.FC<RocketProps> = ({ screenSize }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ dx: 1, dy: 1 });
  const [angle, setAngle] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  // Calculate rocket rotation angle based on direction
  useEffect(() => {
    const angleInDegrees = Math.atan2(direction.dy, direction.dx) * (180 / Math.PI) + 90;
    setAngle(angleInDegrees);
  }, [direction]);

  // Move the rocket and handle bouncing
  const moveRocket = () => {
    setPosition((prevPosition) => {
      let newX = prevPosition.x + direction.dx * 5;
      let newY = prevPosition.y + direction.dy * 5;
      let newDx = direction.dx;
      let newDy = direction.dy;

      // Check for collision with edges
      if (newX <= 0 || newX >= screenSize.width - 75) {
        newDx = -newDx;
      }

      if (newY <= 0 || newY >= screenSize.height - 75) {
        newDy = -newDy;
      }

      setDirection({ dx: newDx, dy: newDy });
      return { x: newX, y: newY };
    });

    animationFrameRef.current = requestAnimationFrame(moveRocket);
  };

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(moveRocket);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [direction, screenSize]);

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '150px',
        height: '150px',
        top: position.y,
        left: position.x,
        transform: `rotate(${angle}deg)`,
        transformOrigin: 'center',
        zIndex: 2,
      }}
    >
      <Lottie animationData={rocketAnimation} loop={true} />
    </Box>
  );
};

export default Rocket;
