// src/modules/home/components/Carousel.tsx
import React, { useState } from "react";
import { Box } from "@mui/material";

interface Logo {
  title: string;
  isWhite: boolean;
  url: string;
  img: string;
}

interface CarouselProps {
  logos: Logo[];
  speed?: number;
  sx?: object;
}

export const Carousel: React.FC<CarouselProps> = ({
  logos,
  speed = 40,
  sx,
}) => {
  const animationDuration = Object.keys(logos).length * (200 / speed); // ajustamos duración basada en cantidad

  const [isPaused, setIsPaused] = useState(false);

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        backgroundColor: "background.paper",
        py: 2,
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          animation: `scrollAlt ${animationDuration}s linear infinite`,
          animationDirection: 'alternate',
          animationIterationCount: 'infinite',
          animationPlayState: isPaused ? 'paused' : 'running',
          '@keyframes scrollAlt': {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-50%)' },
          },
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {/* Repetimos los logos para crear efecto de loop infinito */}
        {[...logos, ...logos].map((logo, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 auto",
              mx: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 60,
            }}
          >
            <Box
              component={"img"}
              src={logo.img}
              alt={logo.title}
              sx={{
                maxHeight: "100%",
                minWidth: "100px",
                maxWidth: {
                  xs: "120px",
                  md: "150px",
                  lg: "180px",
                  xl: "200px",
                },
                objectFit: "contain",
                filter: logo.isWhite ? "invert(1)" : "none",
                cursor: "pointer",
              }}
              loading="lazy"
              decoding="async"
              onClick={() => handleClick(logo.url)}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
