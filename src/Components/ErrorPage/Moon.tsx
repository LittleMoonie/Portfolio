import React from 'react';
import { Box } from '@mui/material';
import Lottie from 'lottie-react';
import moonAnimation from '../../lottiefiles/moon.json';

const Moon: React.FC = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: '40%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				width: { xs: '150px', md: '300px' }, // Responsive width and height
				height: { xs: '150px', md: '300px' },
				zIndex: 1,
			}}
		>
			<Lottie animationData={moonAnimation} loop={true} />
		</Box>
	);
};

export default Moon;
