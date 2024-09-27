// src/components/Experiences/SkillsChips.tsx

import React from 'react';
import { Box, Chip } from '@mui/material';

interface SkillsChipsProps {
  skills: string[];
}

const SkillsChips: React.FC<SkillsChipsProps> = ({ skills }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
      {skills.map((skill, index) => (
        <Chip
          key={index}
          label={skill}
          sx={{
            backgroundColor: '#1F2937',
            color: '#E5E7EB',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#2563EB',
              color: '#FFFFFF',
            },
          }}
        />
      ))}
    </Box>
  );
};

export default SkillsChips;
