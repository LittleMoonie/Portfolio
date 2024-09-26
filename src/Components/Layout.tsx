// src/components/Layout.tsx
import React from 'react';
import { Grid, Box } from '@mui/material';
import Greetings from './Greetings';
import Content from './Content';
import { Canvas } from '@react-three/fiber';
import { Particles } from './Particles';

const Layout: React.FC = () => {
	return (
		<Box>
			<Box
				sx={{
					height: '100vh',
					backgroundImage: 'linear-gradient(#12100E, #2B4162)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					padding: 3,
				}}
			>
				{/* Canvas for Particles (Background) */}
				<Grid
					container
					spacing={2}
					sx={{
						height: '80vh',
						width: '90%',
						color: '#e0e0e0',
						fontFamily: 'Inter, sans-serif',
					}}
				>
					{/* Left Column: Static content (Greetings and About Me) */}
					<Grid
						item
						xs={12}
						md={5}
						sx={{
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
              zIndex: 100,
						}}
					>
						<Greetings />
					</Grid>

					{/* Right Column: Scrollable content (Work experience, studies, projects, etc.) */}
					<Grid
						item
						xs={12}
						md={7}
						sx={{
							height: '100%',
							overflowY: 'auto',
							maxHeight: '100%',
							padding: 2,
							color: '#e0e0e0',
              zIndex: 100,
						}}
					>
						<Content />
					</Grid>
				</Grid>
				<Canvas
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						zIndex: 0,
					}}
					camera={{ position: [0, 0, 1] }}
				>
					<Particles />
				</Canvas>
			</Box>
		</Box>
	);
};

export default Layout;
