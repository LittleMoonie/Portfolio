// src/components/About.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const About: React.FC = () => {
	return (
		<Box sx={{ paddingBottom: 4, mb: 10 }}>
			<Typography
				variant='body1'
				sx={{
					fontFamily: 'Source Sans Pro, sans-serif',
					fontSize: '24px',
					fontWeight: 400,
					lineHeight: 1.8,
					color: '#c0c0c0',
					mb: 2,
				}}
			>
				My coding journey began five years after moving from Canada
				to France, in high school when I taught myself{' '}
				<span style={{ fontWeight: 'bold', color:"white" }}>Python</span> and built my first{' '}
				<span style={{ fontWeight: 'bold', color:"white" }}>Discord Bot</span>. This sparked my
				passion for solving problems through software. I fully immersed myself in programming, and now I’m pursuing
				Full Stack Development at{' '}
				<span style={{ fontWeight: 'bold' }}>Epitech</span> in Nancy.
			</Typography>
			<Typography
				variant='body1'
				sx={{
					fontFamily: 'Source Sans Pro, sans-serif',
					fontSize: '24px',
					fontWeight: 400,
					lineHeight: 1.8,
					color: '#c0c0c0',
					mb: 2,
				}}
			>
				I specialize in <span style={{ fontWeight: 'bold', color:"white" }}>C#</span> and{' '}
				<span style={{ fontWeight: 'bold', color:"white" }}>React</span> with{' '}
				<span style={{ fontWeight: 'bold', color:"white" }}>TypeScript</span>, focusing on
				building modern, responsive web applications. I also have experience
				with frameworks, APIs, and SQL databases.
			</Typography>
			<Typography
				variant='body1'
				sx={{
					fontFamily: 'Source Sans Pro, sans-serif',
					fontSize: '24px',
					fontWeight: 400,
					lineHeight: 1.8,
					color: '#c0c0c0',
					mb: 2,
				}}
			>
				I’m eager to explore{' '}
				<span style={{ fontWeight: 'bold', color:"white" }}>AI engineering</span> {' '}while
				continuing to refine my expertise in full-stack development and building
				my own cross-platform game.
			</Typography>
			<Typography
				variant='body1'
				sx={{
					fontFamily: 'Source Sans Pro, sans-serif',
					fontSize: '24px',
					fontWeight: 400,
					lineHeight: 1.8,
					color: '#c0c0c0',
					mb: 2,
				}}
			>
				When I’m not coding, you’ll find me gazing at the night sky as a moon
				enthusiast, traveling to explore new cultures, staying active, or
				binge-watching coding streams on Twitch and YouTube.
			</Typography>
		</Box>
	);
};

export default About;
