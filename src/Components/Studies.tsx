import React, { useRef, useEffect, useState } from 'react';
import {
	Box,
	Typography,
	Card,
	CardContent,
	Chip,
	IconButton,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const schools = [
	{
		title: 'Epitech Nancy',
		date: 'Aug 2024 - July 2027',
		skills: ['HTML5', 'PHP', 'SQL', 'JavaScript', 'SCSS', 'Agile', 'SCRUM'],
		link: 'https://www.epitech.eu/ecole-informatique-nancy/',
	},
	{
		title: 'Metz Numeric School',
		date: 'Oct 2022 - July 2024',
		skills: [
			'C#',
			'Java',
			'Vue.js',
			'Vite.js',
			'JavaScript',
			'UI/UX',
			'HTML',
			'PHP',
			'Git',
			'CSS',
		],
		link: 'https://www.metz-numeric-school.fr/fr',
	},
	{
		title: 'Bachelor of Mathematics and Computer Science',
		date: 'Oct 2021 - Jun 2022',
		skills: ['C', 'C++'],
	},
	{
		title: 'DUT, Statistics and Business Intelligence',
		date: 'Oct 2020 - Jun 2021',
		skills: ['VBA', 'R'],
	},
	// Additional schools can be added here...
];

const HorizontalTimeline: React.FC = () => {
	const timelineRef = useRef<HTMLDivElement>(null);
	const [expanded, setExpanded] = useState<number | null>(null);

	// Handle sideways scroll
	useEffect(() => {
		const timeline = timelineRef.current;

		if (timeline) {
			const handleWheel = (event: WheelEvent) => {
				event.preventDefault();
				timeline.scrollLeft += event.deltaY;
			};

			timeline.addEventListener('wheel', handleWheel);

			return () => {
				timeline.removeEventListener('wheel', handleWheel);
			};
		}
	}, []);

	const toggleExpand = (index: number) => {
		setExpanded(expanded === index ? null : index);
	};

	return (
		<Box
			ref={timelineRef}
			sx={{
				display: 'flex',
				alignItems: 'center',
				position: 'relative',
				padding: '20px 0',
				overflowX: 'auto',
				whiteSpace: 'nowrap',
				scrollbarWidth: 'none',
        mb: 10,
				'&::-webkit-scrollbar': { display: 'none' },
			}}
		>
			{schools.map((school, index) => {
				const isExpanded = expanded === index;
				const visibleSkills = isExpanded
					? school.skills
					: school.skills.slice(0, 2);
				const hiddenSkillsCount = school.skills.length - visibleSkills.length;

				return (
					<Box
						key={index}
						sx={{
							display: 'flex',
							alignItems: 'center',
							flexShrink: 0, // Prevent cards from shrinking
							flexGrow: 0, // Prevent cards from growing to fill extra space
							flexBasis: 'auto', // Allow cards to take up only the space they need
						}}
					>
						{/* Dot for each milestone */}
						<Box
							sx={{
								width: '15px',
								height: '15px',
								backgroundColor: '#00bcd4',
								borderRadius: '50%',
								marginRight: '8px',
							}}
						/>

						{/* Line between dots, except for the last dot */}
						{index < schools.length && (
							<Box
								sx={{
									height: '2px',
									width: '60px',
									backgroundColor: '#00bcd4',
									marginRight: '8px',
								}}
							/>
						)}

						{/* Card for each school */}
						<Card
							sx={{
								minWidth: '300px', // Set a minimum width for each card
								maxWidth: '500px', // Optionally set a maximum width if needed
								height: 'auto',
								backgroundColor: '#121212',
								color: '#e0e0e0',
								borderRadius: '8px',
								boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
								transition: 'all 0.3s ease-in-out',
								mr: 1,
							}}
						>
							<CardContent>
								{/* Date - Always Visible */}
								<Typography
									variant='body2'
									sx={{ fontSize: '15px', color: '#a0a0a0', mb: 1 }}
								>
									{school.date}
								</Typography>

								{/* Title - Always Visible */}
								<Typography
									variant='h6'
									sx={{
										fontWeight: 'bold',
										fontSize: '18px',
										color: '#00bcd4',
										mb: 1,
									}}
								>
									{school.title}
									{school.link && (
										<IconButton
											component='a'
											href={school.link}
											target='_blank'
											rel='noopener noreferrer'
											aria-label='Open external site'
											sx={{ color: 'white' }}
										>
											<LaunchIcon />
										</IconButton>
									)}
								</Typography>

								{/* Skills as chips */}
								<Box
									sx={{
										mt: 2,
										flexWrap: 'wrap',
										gap: 1,
										display: 'flex',
									}}
								>
									{visibleSkills.map((skill, idx) => (
										<Chip
											key={idx}
											label={skill}
											sx={{
												backgroundColor: '#00bcd4',
												color: '#fff',
												fontSize: '12px',
											}}
										/>
									))}

									{/* Show "View N more" chip if there are hidden skills */}
									{hiddenSkillsCount > 0 && (
										<Chip
											label={`View ${hiddenSkillsCount} more`}
											onClick={() => toggleExpand(index)}
											sx={{
												backgroundColor: '#00bcd4',
												color: '#fff',
												fontSize: '12px',
												cursor: 'pointer',
											}}
										/>
									)}

									{/* Show "Show less" chip when expanded */}
									{isExpanded && (
										<Chip
											label='Show less'
											onClick={() => toggleExpand(index)}
											sx={{
												backgroundColor: '#ff9800',
												color: '#fff',
												fontSize: '12px',
												cursor: 'pointer',
											}}
										/>
									)}
								</Box>
							</CardContent>
						</Card>
					</Box>
				);
			})}
		</Box>
	);
};

export default HorizontalTimeline;
