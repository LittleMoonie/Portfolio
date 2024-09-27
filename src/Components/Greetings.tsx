// src/components/Greetings.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import VerticalNavigation from './Navigation/VerticalNavigation';
import SocialMediaIcons from './Navigation/SocialMediaIcons';

const Greetings: React.FC = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start', // Align items to the left
				justifyContent: 'flex-start',
				maxHeight: '45%',
				padding: '40px 20px',
				position: 'relative',
				maxWidth: '800px', // Optional: Limit width for better text alignment
				margin: 'auto', // Center the container horizontally
			}}
		>
			{/* Greetings Text */}
			<Box sx={{ mb: 4 }}>
				<Typography
					variant='h3'
					gutterBottom
					sx={{
						fontFamily: 'Inter, sans-serif',
						fontWeight: 600,
						letterSpacing: '0.03em',
						color: '#ffffff',
						textAlign: 'left', // Align text to the left
					}}
				>
					Lazaro Marrero Rousse
				</Typography>
				<Typography
					variant='h4'
					gutterBottom
					sx={{
						fontFamily: 'Source Sans Pro, sans-serif',
						fontWeight: 500,
						color: '#ffffff',
						textAlign: 'left', // Align text to the left
					}}
				>
					Full Stack Developer Student
				</Typography>
				<Typography
					variant='h5'
					sx={{
						fontFamily: 'Source Sans Pro, sans-serif',
						fontWeight: 300,
						lineHeight: 1.8,
						color: '#d0d0d0',
						width: '100%', // Full width for text content
						textAlign: 'left', // Align text to the left
					}}
				>
					I work on a wide range of projects, including websites, software, and
					games, especially during my free time at school.
				</Typography>
			</Box>

			{/* Vertical Navigation (Positioned under greeting text) */}
			<VerticalNavigation />

			{/* Social Media Icons (Positioned below navigation) */}
			<SocialMediaIcons />
		</Box>
	);
};

export default Greetings;
