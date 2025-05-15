// src/modules/home/components/Hero.tsx
import React from "react";
import {
  Box,
  Button,
  styled,
} from "@mui/material";
import persona_midiendo_calibre from "@videos/persona_midiendo_calibre_hd_1920_1080_25fps.mp4";
import { P, TitleXL } from "@theme/textStyles";


export const Hero: React.FC = () => {
  // Estilos personalizados usando styled de MUI
  const HeroSection = styled(Box)(() => ({
    position: "relative",
    height: "80vh",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const VideoBackground = styled("video")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  });

  const Overlay = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Overlay oscuro para mejorar la legibilidad
    zIndex: 1,
  });

  const CtaButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1.5, 4),
    maxWidth: "300px",
    fontWeight: 600,
    fontSize: "1rem",
    backgroundColor: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
      transform: "translateY(-3px)",
      transition: "all 0.3s",
    },
  }));
  return (
    <HeroSection>
      {/* Video de fondo */}
      <VideoBackground
        src={persona_midiendo_calibre}
        autoPlay
        loop
        muted
        playsInline // Importante para iOS
      >
        Tu navegador no admite el elemento <code>video</code>.
      </VideoBackground>

      {/* Overlay oscuro para mejorar la legibilidad del texto */}
      <Overlay />

      {/* Contenido del hero superpuesto al video */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          paddingX: {xs:"2rem", lg:"3rem", xl:"4rem"},
        }}
      >
        <TitleXL sx={{ color: "primary.light" }}>
          MECANIZADOS Y MANTENIMIENTO INDUSTRIAL
        </TitleXL>
        <Box>
        <P
          sx={{
            fontSize: {xl: '1.5rem', lg: '1.375rem', md: '1.25rem', sm: '1.125rem', xs: '1rem'},
            color: "primary.light",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Fabricación y reparación de piezas y equipos para la industria,
          según planos, muestras o ingeniería propia.
        </P>
        <P
          sx={{
            fontSize: {xl: '1.5rem', lg: '1.375rem', md: '1.25rem', sm: '1.125rem', xs: '1rem'},
            color: "primary.light",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Calidad y precisión garantizada.
        </P>

        </Box>
        <CtaButton
          variant="contained"
          color="warning"
          href="#contacto"
        >
          SOLICITAR PRESUPUESTO
        </CtaButton>
      </Box>
    </HeroSection>
  );
};
