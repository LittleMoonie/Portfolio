// src/components/Content.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import About from './About';
import Studies from './Studies';
import Projects from './Projects';
import Experiences from './Experiences';
import '../Styles/ContentStyle.css';

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
			<Studies />
			<Projects />
		</Box>
	);
};

export default Content;
