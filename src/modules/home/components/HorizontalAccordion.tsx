import React from 'react';
import { Box, Paper, useTheme } from '@mui/material';
import { Text1 } from '@/theme/textStyles';

interface Panel {
  id: string;
  title: string;
  description: string;
  image?: string;
}

interface HorizontalAccordionProps {
  panels: Panel[];
  expanded: string | null;
  setExpanded: (id: string) => void;
}

const HorizontalAccordion: React.FC<HorizontalAccordionProps> = ({ panels, expanded, setExpanded }) => {
  const theme = useTheme();
  const { palette } = theme;
  // const isMobile = theme.breakpoints.down("md");

  return (
    <Box sx={{ height:{xs: '300px', lg: '350px'}, display:"flex",  }}>
      {panels.map(({ id, title, image }) => (
        <Paper
          key={id}
          elevation={3}
          sx={{
            position: 'relative',
            width: expanded === id ? {xs: '300px', lg: '350px'} : {xs: '60px', lg: '80px'},
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            mr: 1
          }}
          onClick={() => setExpanded(id)}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // Overlay oscuro para mejorar la legibilidad
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingBottom: "1rem",
            }}>
            <Box
              sx={{
                p: 1,
                writingMode: 'vertical-rl',
                transform: expanded === id ? 'rotate(270deg)' : 'rotate(180deg)',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'baseline',
              }}
            >
              <Text1 sx={{ 
                color: expanded === id ? 'transparent' : palette.grey[50], 
                transition: 'all 0.3s ease',
                zIndex: 11,
                transform: {xs: "scale(1)", lg: "scale(1.1)"} 
              }}>
                {title}
              </Text1>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default HorizontalAccordion;
