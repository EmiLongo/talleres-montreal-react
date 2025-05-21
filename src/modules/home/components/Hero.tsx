// src/modules/home/components/Hero.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SubtitleXL, TitleXL } from "@theme/textStyles";

// Videos para desktop
const desktopVideos = [
  import("@videos/persona_midiendo_calibre_hd_1920_1080_25fps.mp4"),
  import("@videos/persona_midiendo_tornillo_uhd_3840_2160_30fps.mp4"),
  import("@videos/plano-calibre-hd_1920_1080_25fps.mp4"),
  import("@videos/soldadura_2560_1440_30fps.mp4"),
  import("@videos/torno_iluminado_2560_1440_30fps.mp4"),
  import("@videos/torno_manivela_hd_1920_1080_25fps.mp4"),
];

// Videos para mobile
const mobileVideos = [
  import("@videos/vert_persona_midiendo_calibre_hd_1080_1920_25fps.mp4"),
  import("@videos/vert_torno_encender-hd_1080_1920_25fps.mp4"),
  import("@videos/vert_torno_manivela_hd_1080_1920_25fps.mp4"),
  import("@videos/vert_torno-hd_1080_1920_25fps.mp4"),
];
// const desktopVideos = [
//   () => import("@videos/persona_midiendo_calibre_hd_1920_1080_25fps.mp4"),
//   () => import("@videos/persona_midiendo_tornillo_uhd_3840_2160_30fps.mp4"),
//   () => import("@videos/plano-calibre-hd_1920_1080_25fps.mp4"),
//   () => import("@videos/soldadura_2560_1440_30fps.mp4"),
//   () => import("@videos/torno_iluminado_2560_1440_30fps.mp4"),
//   () => import("@videos/torno_manivela_hd_1920_1080_25fps.mp4"),
// ];

// const mobileVideos = [
//   () => import("@videos/vert_persona_midiendo_calibre_hd_1080_1920_25fps.mp4"),
//   () => import("@videos/vert_torno_encender-hd_1080_1920_25fps.mp4"),
//   () => import("@videos/vert_torno_manivela_hd_1080_1920_25fps.mp4"),
//   () => import("@videos/vert_torno-hd_1080_1920_25fps.mp4"),
// ];


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

export const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(-1);
  const [currentVideoSrc, setCurrentVideoSrc] = useState<string>("");
  const [nextVideoIndex, setNextVideoIndex] = useState<number>(-1);
  const [nextVideoSrc, setNextVideoSrc] = useState<string>("");
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const preloadVideoRef = useRef<HTMLVideoElement>(null);
  const lastPlayedIndex = useRef<number>(-1);

const playVideo = async (videoRef: React.RefObject<HTMLVideoElement> | null): Promise<void> => {
  if (!videoRef?.current) return;

  try {
    await videoRef.current.play();
    console.log("Video reproduciéndose correctamente");
  } catch (error) {
    console.error("Error al reproducir el video:", error);
  }
};

  
  // Función para seleccionar un índice de video que no haya sido reproducido recientemente
  const getNextVideoIndex = (totalVideos: number): number => {
    if (totalVideos <= 1) return 0;   
    // elegimos uno aleatorio distinto al último
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * totalVideos);
    } while (newIndex === lastPlayedIndex.current || newIndex === currentVideoIndex);
    return newIndex;
  };

  // Inicializar el video cuando el componente se monta
  useEffect(() => {
    const videos = isMobile ? mobileVideos : desktopVideos;
    const initialIndex = getNextVideoIndex(videos.length);
    
    // Cargamos el primer video
    videos[initialIndex].then(module => {
      setCurrentVideoIndex(initialIndex);
      setCurrentVideoSrc(module.default);
      lastPlayedIndex.current = initialIndex;
      
      // Precargamos el siguiente video
      const nextIndex = getNextVideoIndex(videos.length);
      videos[nextIndex].then(nextModule => {
        setNextVideoSrc(nextModule.default);
      });
      setNextVideoIndex(nextIndex);
    });
  }, [isMobile]);

  // Manejar el fin de la reproducción del video
  const handleVideoEnded = () => {
    if (nextVideoSrc && preloadVideoRef.current && preloadVideoRef.current?.readyState >= 3) {
      
      // Preparamos el siguiente video
      const videos = isMobile ? mobileVideos : desktopVideos;
      const nextIndex = getNextVideoIndex(videos.length);

      // Actualizamos el índice del video actual y registramos que se ha reproducido
      lastPlayedIndex.current = currentVideoIndex;

      // El siguiente video está listo, hacemos el cambio
      setCurrentVideoSrc(nextVideoSrc);
      setCurrentVideoIndex(nextVideoIndex);
      setIsVideoLoaded(true);
      
      // Actualizamos el índice del video siguiente
      setNextVideoIndex(nextIndex);      
      videos[nextIndex].then(module => {
        setNextVideoSrc(module.default);
      });
    } else {
      // Si el siguiente video no está listo, reproducimos el actual nuevamente
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  // Reproducir el video automáticamente cuando se carga
  useEffect(() => {
    const video = videoRef.current;

    if (currentVideoSrc && video) {
      video.load();

      const handleCanPlay = () => {
        playVideo(videoRef);
      };

      video.addEventListener("canplay", handleCanPlay);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, [currentVideoSrc]);

  return (
    <HeroSection>
      {/* Video de fondo */}
      {currentVideoSrc && (
        <VideoBackground
        // src={personaMidiendoCalibre}
        ref={videoRef}
        src={currentVideoSrc}
        autoPlay
        muted
        playsInline // Importante para iOS
        onEnded={handleVideoEnded}
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        Tu navegador no admite el elemento <code>video</code>.
      </VideoBackground>
    )}

      {/* Video precargado (oculto) */}
      {nextVideoSrc && (
        <Box
          component="video"
          ref={preloadVideoRef}
          src={nextVideoSrc}
          sx={{ width: 0, height: 0, opacity: 0 }}
          preload="auto"
          muted
        />
      )}

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
        <SubtitleXL
          sx={{
            fontSize: {xl: '1.5rem', lg: '1.375rem', md: '1.25rem', sm: '1.125rem', xs: '1rem'},
            color: "primary.light",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Fabricación y reparación de piezas y equipos para la industria,
          según planos, muestras o ingeniería propia.
        </SubtitleXL>
        <SubtitleXL
          sx={{
            fontSize: {xl: '1.5rem', lg: '1.375rem', md: '1.25rem', sm: '1.125rem', xs: '1rem'},
            color: "primary.light",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Calidad y precisión garantizada.
        </SubtitleXL>

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
