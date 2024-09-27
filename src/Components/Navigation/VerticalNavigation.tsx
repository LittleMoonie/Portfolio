// src/components/Navigation/VerticalNavigation.tsx

import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemButton } from '@mui/material';

const sections = [
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },
];

const VerticalNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(''); // Track active section

  useEffect(() => {
    // Create intersection observer to detect active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger callback when 50% of the section is visible
    );

    // Observe each section
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    // Clean up observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'flex-start', // Align items to the left
        bgcolor: 'transparent',
        marginTop: '40px',
      }}
    >
      {/* Navigation List */}
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column', // Keep navigation items stacked vertically
          gap: 2, // Space between each nav item
        }}
      >
        {sections.map((section) => (
          <ListItem
            key={section.id}
            disablePadding
            sx={{
              transition: 'all 0.3s',
              color: activeSection === section.id ? '#60A5FA' : '#E5E7EB',
              '&:hover': { color: '#60A5FA' },
              textAlign: 'left', // Align text to the left
            }}
          >
            <ListItemButton
              href={`#${section.id}`} // Links to section ids
              sx={{
                justifyContent: 'flex-start', // Align text to the left
                padding: '10px 20px',
                borderBottom: activeSection === section.id ? '2px solid #60A5FA' : 'none', // Highlight active section
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Typography>{section.name}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default VerticalNavigation;
