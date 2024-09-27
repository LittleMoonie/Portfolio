// src/components/Education/index.tsx

import React from 'react';
import { Box } from '@mui/material';
import EducationCard from './EducationCard';
import LinkedInLink from './LinkedInLink';

const educationData = [
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
];

const Education: React.FC = () => {
	return (
		<Box
			sx={{
				padding: '40px 20px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: 1, // Gap between cards
			}}
		>
			{/* Render Each Education Card */}
			{educationData.map((school, index) => (
				<EducationCard
					key={index}
					title={school.title}
					date={school.date}
					skills={school.skills}
					link={school.link}
				/>
			))}
			{/* LinkedIn Link Section */}
			<LinkedInLink />
		</Box>
	);
};

export default Education;
