// src/components/Experiences.tsx
import React from 'react';
import { Box, Typography, Card, Chip, IconButton } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const Experiences: React.FC = () => {
	return (
		<Box sx={{ paddingBottom: 4, mb: 2 }}>
			<Card
				sx={{
					padding: '16px',
					backgroundColor: '#121212',
					color: '#e0e0e0',
					borderRadius: '8px',
					boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
					marginBottom: '20px',
				}}
			>
				<Box>
					{/* Date range for the job */}
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
						Apr 2024 - Aug 2024
					</Typography>

					<Box>
						{/* Job Title and Company */}
						<Typography
							variant='h6'
							sx={{
								fontFamily: 'Source Sans Pro, sans-serif',
								fontSize: '20px',
								fontWeight: 600,
								color: '#00bcd4',
								mb: 1,
							}}
						>
							Software Development Intern · Deloitte
							<IconButton
								component='a'
								href={'https://www.deloitte.com/lu/en.html'}
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Open external site'
								sx={{ color: 'white' }}
							>
								<LaunchIcon />
							</IconButton>
						</Typography>

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
							During my{' '}
							<span style={{ fontWeight: 'bold' }}>
								internship at Deloitte Luxembourg
							</span>{' '}
							in{' '}
							<span style={{ fontWeight: 'bold' }}>Software Development</span>{' '}
							(April 2024 - August 2024), I worked on the development of a
							clients' and partners'{' '}
							<span style={{ fontWeight: 'bold' }}>
								document management system
							</span>{' '}
							within a financial project.
						</Typography>

						{/* Skills Acquired */}
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
							<span style={{ fontWeight: 'bold' }}>Skills Acquired:</span>{' '}
							Proficient in{' '}
							<span style={{ fontWeight: 'bold' }}>React, ASP.NET Core</span>,
							and <span style={{ fontWeight: 'bold' }}>MSSQL</span>. Developed a
							strong understanding of{' '}
							<span style={{ fontWeight: 'bold' }}>API management</span> and
							collaboration with cross-functional teams, with exposure to
							financial and tax-related processes.
						</Typography>

						{/* Chips for Skills Summary */}
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: 1,
								mt: 2,
								width: '80%',
							}}
						>
							<Chip
								label='React'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='TypeScript'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='ASP.NET Core'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='MSSQL'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='API Integration'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='DevOps'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='Git'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='CSS'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='Full Stack Development'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='SCRUM'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
						</Box>
					</Box>
				</Box>
			</Card>
			<Card
				sx={{
					padding: '16px',
					backgroundColor: '#121212',
					color: '#e0e0e0',
					borderRadius: '8px',
					boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
					marginBottom: '20px',
				}}
			>
				<Box>
					{/* Date range for the job */}
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
						May 2023 - Jun 2023
					</Typography>

					<Box>
						{/* Job Title and Company */}
						<Typography
							variant='h6'
							sx={{
								fontFamily: 'Source Sans Pro, sans-serif',
								fontSize: '20px',
								fontWeight: 600,
								color: '#00bcd4',
								mb: 1,
							}}
						>
							Web Developer Intern · NaissanceOCalme
						</Typography>

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
							As the sole developer, I led the full stack development of the
							company's website using{' '}
							<span style={{ fontWeight: 'bold' }}>
								HTML5, PHP, SQL, JavaScript, and SCSS
							</span>
							. I introduced an{' '}
							<span style={{ fontWeight: 'bold' }}>
								Agile workflow with SCRUM
							</span>
							, ensuring efficient project management and regular feedback
							loops.
						</Typography>

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
							I established responsiveness for a stable product across devices.{' '}
							<br /> Additionally, I maintained detailed{' '}
							<span style={{ fontWeight: 'bold' }}>documentation</span> for
							future scalability.
						</Typography>

						{/* Chips for Skills Summary */}
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
							<Chip
								label='HTML5'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='PHP'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='SQL'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='JavaScript'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='SCSS (CSS)'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='Agile'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
							<Chip
								label='SCRUM'
								sx={{ backgroundColor: '#00bcd4', color: '#fff' }}
							/>
						</Box>
					</Box>
				</Box>
			</Card>
		</Box>
	);
};

export default Experiences;
