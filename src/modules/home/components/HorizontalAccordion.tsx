import React from 'react';
import { Box, Paper, useTheme } from '@mui/material';
import { SubtitleXL } from '@/theme/textStyles';

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
    <Box 
    sx={{
      height:{xs: 'unset', sm: '300px', lg: '350px'}, 
      display:"flex", 
      flexDirection:{xs:"column", sm:"row"}, 
      alignItems:{xs: "center", sm: "unset"},
      gap: {xs: 1, sm: "unset"},
    }}>
      {panels.slice().reverse().map(({ id, title, image }) => (
        <Paper
          key={id}
          elevation={3}
          sx={{
            position: 'relative',
            width: {xs: '300px', sm: expanded === id ? '300px': '60px', lg: expanded === id ? '350px' : '80px'},
            height: {xs: expanded === id ? '300px': '60px', sm: '300px', lg: '350px'},
            display: 'flex',
            flexDirection: 'column',
            justifyContent: {xs: 'flex-start', sm: 'flex-end'},
            alignItems: 'center',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
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
              backgroundColor: expanded === id ? 'transparent' : "rgba(0, 0, 0, 0.5)",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: {xs: 'center', sm: 'flex-end'},
              alignItems: {xs: 'flex-start', sm: 'center'},
              paddingBottom: {xs: 0, sm: "1rem"},
              transition: 'all 0.3s ease',
              paddingLeft: {xs: "1rem", sm: "unset"},
            }}>
            <Box
              sx={{
                p: 1,
                writingMode: {xs: 'horizontal-tb', md: 'vertical-rl'},
                transform: {xs: expanded === id ? 'rotate(90deg)' : 'rotate(0deg)', md: expanded === id ? 'rotate(270deg)' : 'rotate(180deg)'},
                whiteSpace: 'nowrap',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: {xs: 'flex-start', md: 'flex-end'},
              }}
            >
              <SubtitleXL sx={{ 
                color: expanded === id ? 'transparent' : palette.grey[50], 
                transition: 'all 0.3s ease',
                zIndex: 11,
                // transform: {xs: "scale(1.1)"} 
              }}>
                {title}
              </SubtitleXL>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default HorizontalAccordion;
