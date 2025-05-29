import React, { useState } from 'react';
import { Box, Paper, useTheme } from '@mui/material';
import { SubtitleXL, Text1, Title1 } from '@/theme/textStyles';

interface Panel {
  id: string;
  title: string;
  description: string;
  image?: string;
}

interface HorizontalAccordionProps {
  panels: Panel[];
}

const HorizontalAccordion: React.FC<HorizontalAccordionProps> = ({ panels }) => {
  const theme = useTheme();
  const { palette } = theme;

  const [expanded, setExpanded] = useState<string | null>(panels[0].id || null);
  const handleExpanse = (id: string) => {
    setExpanded(id);
  };
  

  return (
    <Box 
    sx={{
      height:{xs: 'unset', md: '300px', lg: '350px'}, 
      display:"flex", 
      flexDirection:{xs:"column", md:"row"}, 
      alignItems:{xs: "center", md: "unset"},
      gap: "3px",
    }}>
      {panels.slice().reverse().map(({ id, title, image, description }) => (
        <>
        <Paper
          key={`photo${id}`}
          elevation={3}
          sx={{
            position: 'relative',
            width: {xs: '300px', md: expanded === id ? '300px': '60px', lg: expanded === id ? '350px' : '80px'},
            height: {xs: expanded === id ? '300px': '60px', md: '300px', lg: '350px'},
            display: 'flex',
            flexDirection: 'column',
            justifyContent: {xs: 'flex-start', md: 'flex-end'},
            alignItems: 'center',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
          }}
          onClick={() => handleExpanse(id)}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: expanded === id ? 'transparent' : "rgba(0, 0, 0, 0.7)",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: {xs: 'center', md: 'flex-end'},
              alignItems: {xs: 'flex-start', md: 'center'},
              paddingBottom: {xs: 0, md: "1rem"},
              transition: 'all 0.3s ease',
              paddingLeft: {xs: "1rem", md: "unset"},
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
        <Box 
        key={`text${id}`}
        sx={{ 
          width: {xs: '300px', md: expanded === id ? '300px': '1px', lg: expanded === id ? '350px' : '1px'},
          height: {xs: expanded === id ? '200px': '1px', md: '300px', lg: '350px'},
          color: expanded === id ? "text.primary" : 'transparent',
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center",
          opacity: expanded === id ? 1 : 0,
          transition: 'all 0.3s ease',
          overflow: "hidden",
          paddingLeft: {xs: "unset", md: "0.5rem"},
        }}>
          <Title1 sx={{ color: 'inherit', mb: "1rem", textWrap: "wrap", textTransform: "capitalize", textAlign: {xs: "center", md: "left"}}}>
            {title}
          </Title1>
          <Text1 sx={{ color: 'inherit', textWrap: "wrap" }}>
            {description}
          </Text1>
        </Box>
        </>
      ))}
    </Box>
  );
};

export default HorizontalAccordion;
