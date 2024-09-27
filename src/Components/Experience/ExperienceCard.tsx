// src/components/Experiences/ExperienceCard.tsx

import React from 'react';
import {
	Box,
	Typography,
	Card,
	IconButton,
	CardActionArea,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';
import SkillsChips from '../SkillsChips';

interface ExperienceCardProps {
	date: string;
	position: string;
	company: string;
	link: string;
	description: string;
	skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
	date,
	position,
	company,
	link,
	description,
	skills,
}) => {
	return (
		<motion.div
			whileHover={{
				scale: 1.02,
				boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
			}}
			transition={{ duration: 0.3 }}
			style={{ marginBottom: '20px' }}
		>
			<Card
				sx={{
					padding: '20px',
					background: 'linear-gradient(145deg, #0d0d0d, #1a1a1a)',
					color: '#e0e0e0',
					borderRadius: '10px',
					boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
					transition: 'background 0.3s ease-in-out',
					'&:hover': {
						background: 'linear-gradient(145deg, #111111, #252525)',
					},
				}}
			>
				<CardActionArea
					href={link}
					target='_blank'
					rel='noopener noreferrer'
					sx={{ textDecoration: 'none', color: 'inherit' }}
				>
					{/* Date Range */}
					<Typography
						variant='body2'
						sx={{
							fontFamily: 'Source Sans Pro, sans-serif',
							fontSize: '15px',
							fontWeight: 400,
							color: '#a0a0a0',
							mb: 1,
						}}
					>
						{date}
					</Typography>

					{/* Job Title and Company */}
					<Box
						display='flex'
						alignItems='center'
						justifyContent='space-between'
					>
						<Typography
							variant='h6'
							sx={{
								fontFamily: 'Source Sans Pro, sans-serif',
								fontSize: '20px',
								fontWeight: 600,
								color: '#60A5FA',
								mb: 1,
							}}
						>
							{position} · {company}
						</Typography>
						<IconButton
							component='a'
							href={link}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Open external site'
							sx={{ color: '#60A5FA' }}
						>
							<LaunchIcon />
						</IconButton>
					</Box>

					{/* Job Description */}
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Source Sans Pro, sans-serif',
							fontSize: '16px',
							fontWeight: 300,
							lineHeight: 1.8,
							color: '#c0c0c0',
							mb: 2,
						}}
					>
						{description}
					</Typography>

					{/* Skills Chips */}
					<SkillsChips skills={skills} />
				</CardActionArea>
			</Card>
		</motion.div>
	);
};

export default ExperienceCard;
