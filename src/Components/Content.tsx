// src/components/Content.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import About from './About';
import ProjectList from './Projects/ProjectList';
import '../Styles/ContentStyle.css';
import Experiences from './Experience/Experiences';
import Education from './Education/Education';

const Content: React.FC = () => {
	return (
		<Box
			sx={{
				mt: 10,
				minHeight: '80%',
				overflowY: 'auto',
				color: 'white',
			}}
		>
			<About />
			<Experiences />
			<Education />
			<ProjectList />
		</Box>
	);
};

export default Content;
