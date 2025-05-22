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

  const [currentVideoSrc, setCurrentVideoSrc] = useState<string>("");
  const [nextVideoSrc, setNextVideoSrc] = useState<string>("");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const preloadVideoRef = useRef<HTMLVideoElement>(null);
  const currentVideoIndex = useRef<number>(-1);
  const nextVideoIndex = useRef<number>(-1);
  const lastPlayedIndex = useRef<number>(-1);

  const playVideo = async (video: HTMLVideoElement): Promise<void> => {
    try {
      await video.play();
      // console.log("Video reproduciéndose correctamente");
    } catch (error) {
      console.error("Error al reproducir el video:", error);
    }
  };


  
  // Función para seleccionar un índice de video que no haya sido reproducido recientemente
  const getNextVideoIndex = (): number => {
    const totalVideos = isMobile ? mobileVideos.length : desktopVideos.length;
    if (totalVideos <= 1) return 0;   
    // elegimos uno aleatorio distinto al último
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * totalVideos);
    } while (newIndex === lastPlayedIndex.current || newIndex === currentVideoIndex.current);
    return newIndex;
  };

    // Función para cargar un video de forma segura
  const loadVideoSafely = async (videoPromise: Promise<any>): Promise<string | null> => {
    try {
      const module = await videoPromise;
      return module.default;
    } catch (error) {
      console.error("Error cargando video:", error);
      return null;
    }
  };
  const preloadNextVideo = async (videos: Promise<any>[]) => {
    const nextIndex = getNextVideoIndex();
    // console.log(`Precargando video ${nextIndex}, actual: ${currentIndex}, último: ${lastPlayedIndex.current}`);
    
    const videoSrc = await loadVideoSafely(videos[nextIndex]);
    if (videoSrc) {
      nextVideoIndex.current = nextIndex;
      setNextVideoSrc(videoSrc);
    }
  };

  // Inicializar el primer video
  useEffect(() => {
    const videos = isMobile ? mobileVideos : desktopVideos;
    const initialIndex = Math.floor(Math.random() * videos.length);
    // console.log("Iniciando con video:", initialIndex);
    
    loadVideoSafely(videos[initialIndex]).then(videoSrc => {
      if (videoSrc) {
        currentVideoIndex.current = initialIndex;
        setCurrentVideoSrc(videoSrc);
        // Precargar el siguiente
        preloadNextVideo(videos);
      }
    });
  }, [isMobile]);

  // Manejar el fin de la reproducción del video
  const handleVideoEnded = async () => {
    if (isTransitioning) {
      // console.log("Ya hay una transición en curso, ignorando...");
      return;
    }
    // console.log("Video terminó, cambiando...");
    setIsTransitioning(true);

    try {
      // Verificar que el siguiente video esté listo
      if (nextVideoSrc && preloadVideoRef.current) {
        const preloadVideo = preloadVideoRef.current;
        
        // Verificar estado de carga
        if (preloadVideo.readyState >= 3) { // HAVE_FUTURE_DATA o mejor
          // console.log(`Cambiando de video ${currentVideoIndex.current} a ${nextVideoIndex.current}`);
          
          // Actualizar el historial
          lastPlayedIndex.current = currentVideoIndex.current;
          
          // Cambiar al siguiente video
          setCurrentVideoSrc(nextVideoSrc);
          currentVideoIndex.current = nextVideoIndex.current;
          
          // Precargar el próximo video
          const videos = isMobile ? mobileVideos : desktopVideos;
          await preloadNextVideo(videos);
        } else {
          // console.log("El siguiente video no está listo, reintentando reproducción actual");
          if (videoRef.current) {
            await playVideo(videoRef.current);
          }
        }
      } else {
        // console.log("No hay siguiente video disponible, reintentando actual");
        if (videoRef.current) {
          await playVideo(videoRef.current);
        }
      }
    } catch (error) {
      console.error("Error en transición de video:", error);
      // Fallback: reintentar reproducir el video actual
      if (videoRef.current) {
        try {
          await playVideo(videoRef.current);
        } catch (playError) {
          console.error("Error al reproducir video de fallback:", playError);
        }
      }
    } finally {
      setIsTransitioning(false);
    }
  };

  // Reproducir el video automáticamente cuando se carga
  useEffect(() => {
    const video = videoRef.current;

    if (currentVideoSrc && video) {
      // console.log("Cargando nuevo video:", currentVideoIndex);
      video.load();

      const handleCanPlay = () => {
        // console.log("Video listo para reproducir:", currentVideoIndex);
        playVideo(video);
      };

      const handleError = (e: Event) => {
        console.error("Error cargando video:", e);
      };

      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("error", handleError);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
      };
    }
  }, [currentVideoSrc, currentVideoIndex]);

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
        // onLoadedData={() => setIsVideoLoaded(true)}
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
