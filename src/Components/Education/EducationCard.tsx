// src/components/Education/EducationCard.tsx

import React from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';
import SkillsChips from '../SkillsChips'; // Reuse the existing SkillsChips component

interface EducationCardProps {
	title: string;
	date: string;
	skills: string[];
	link?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
	title,
	date,
	skills,
	link,
}) => {
	return (
		<motion.div
			whileHover={{ scale: 1.03 }}
			transition={{ duration: 0.3 }}
			style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
		>
			<Card
				sx={{
					width: '100%',
					backgroundColor: '#1F2937',
					color: '#E5E7EB',
					borderRadius: '15px',
					boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
					transition: 'all 0.3s ease-in-out',
					'&:hover': {
						background: 'linear-gradient(145deg, #374151, #1F2937)', // Slight gradient change on hover
						boxShadow: '0 8px 20px rgba(0, 0, 0, 0.5)',
					},
				}}
			>
				<CardContent sx={{ padding: '20px' }}>
					{/* Title and Link */}
					<Typography
						variant='h6'
						sx={{
							fontWeight: 'bold',
							fontSize: '18px',
							mb: 1,
							color: '#60A5FA',
						}}
					>
						{title}
						{link && (
							<IconButton
								component='a'
								href={link}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Open external site'
								sx={{ color: '#60A5FA', ml: 1 }}
							>
								<LaunchIcon />
							</IconButton>
						)}
					</Typography>

					{/* Date */}
					<Typography
						variant='body2'
						sx={{
							fontSize: '15px',
							color: '#a0a0a0',
							mb: 2,
						}}
					>
						{date}
					</Typography>

					{/* Skills Chips */}
					<SkillsChips skills={skills} />
				</CardContent>
			</Card>
		</motion.div>
	);
};

export default EducationCard;
