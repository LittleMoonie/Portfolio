import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // For smooth animations
import Lottie from 'lottie-react'; // For Lottie animations
import rocketAnimation from '../lottiefiles/rocket.json'; // Replace with your rocket Lottie file
import moonAnimation from '../lottiefiles/moon.json'; // Replace with your moon Lottie file

const LoadingScreen: React.FC = () => {
	const [loadingProgress, setLoadingProgress] = useState(0);

	// Simulate loading progress
	useEffect(() => {
		const interval = setInterval(() => {
			setLoadingProgress((oldProgress) => {
				if (oldProgress === 100) {
					clearInterval(interval); // Stop the interval when reaching 100%
					return 100;
				}
				return Math.min(oldProgress + 1, 100); // Increase by 1% until 100%
			});
		}, 50); // Adjust the speed of loading

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<Box
			sx={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#121212',
				position: 'relative',
			}}
		>
			{/* Loading Percentage Text (above the animation) */}
			<Typography
				variant='h2'
				sx={{
					fontSize: '48px',
					fontWeight: 'bold',
					color: '#fff',
					mb: 3, // Add margin-bottom to space it above the moon/rocket animation
				}}
			>
				{loadingProgress}%
			</Typography>

			{/* Moon and Rocket Orbit */}
			<motion.div
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
				style={{
					width: '200px',
					height: '200px',
					borderRadius: '50%',
					position: 'relative',
				}}
			>
				{/* Rocket Animation (Rotating Around Moon, facing its path) */}

				<motion.div
					style={{
						position: 'absolute',
						top: '-40px', // Place it above the moon
						left: '50%',
						width: '80px',
						height: '80px',
					}}
				>
					<Lottie animationData={rocketAnimation} loop={true} />
				</motion.div>

				{/* Moon Animation (Centered) */}
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: '120px',
						height: '120px',
					}}
				>
					<Lottie animationData={moonAnimation} loop={true} />
				</Box>
			</motion.div>
		</Box>
	);
};

export default LoadingScreen;
