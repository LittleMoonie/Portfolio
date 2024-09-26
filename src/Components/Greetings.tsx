// src/components/Greetings.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Greetings: React.FC = () => {
	return (
		<Box sx={{ backgroundColor: 'transparent' }}>
			<Typography
				variant='h3'
				gutterBottom
				sx={{
					fontFamily: 'Inter, sans-serif',
					fontWeight: 600,
					letterSpacing: '0.03em',
					color: '#ffffff',
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
					color: '#fffff',
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
					width: '80%',
				}}
			>
				I work on a wide range of projects, including websites, software, and
				games, especially during my free time at school.
			</Typography>
		</Box>
	);
};

export default Greetings;
