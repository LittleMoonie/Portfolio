// src/components/Experiences/DownloadResume.tsx

import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DownloadResume: React.FC = () => {
	return (
		<Box display='flex' alignItems='center' mt={4} justifyContent='center'>
			<Link
				href='/path/to/resume.pdf' // Replace with the actual path to your resume file
				download='My_Resume.pdf'
				sx={{
					textDecoration: 'none',
					color: '#FFFFFF',
					display: 'flex',
					alignItems: 'flex-start',
					fontSize: '18px',
					fontWeight: 'bold',
					textUnderlineOffset: '4px',
					'&:hover': {
						textDecoration: 'underline',
						color: '#60A5FA',
					},
				}}
			>
				Find out more on my resume{' '}
				<ArrowForwardIcon sx={{ marginLeft: '8px' }} />
			</Link>
		</Box>
	);
};

export default DownloadResume;
