// src/modules/home/components/Contact.tsx
import React from "react";
import { Box, useTheme } from "@mui/material";
import { SubtitleXL, Text2, TitleH1, TitleXL } from "@/theme/textStyles";
import { GoogleMapCard } from "./GoogleMap";
import { ContactForm } from "./ContactForm";

export const Contact: React.FC = () => {
  const theme = useTheme();
  const { palette } = theme;

  return (
    <Box
      id="contacto"
      sx={{ 
        paddingY: "4rem", 
        paddingX: { xs: "2rem", md: "4rem" },
        backgroundColor: "primary.main", 
        color: "white" 
      }}
    >
      <TitleXL
        id="contact"
        sx={{
          color: palette.primary[100],
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Contacto
      </TitleXL>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
            maxWidth: { xs: "100vw", md: "50vw" },
          }}
        >
          <SubtitleXL sx={{ color: palette.primary[100] }}>
            ¿Tienes alguna pregunta específica? Contáctanos, estamos para
            ayudarte.
          </SubtitleXL>
        </Box>
        <ContactForm
          sx={{
            flex: 1,
            maxWidth: { xs: "100vw", md: "50vw" },
            width: { xs: "300px", sm: "400px", md: "600px" },
          }}
        />
      </Box>
      {/* Contenido: info + formulario */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Información de contacto */}
        <GoogleMapCard
          srcMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.9621951281188!2d-60.7383915333192!3d-32.76673763876167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b65b1be6d77371%3A0xddf8f20133c12343!2sTalleres%20Montreal%20SRL!5e0!3m2!1ses!2sar!4v1747424640892!5m2!1ses!2sar"
          titleMap="Ubicación de Talleres Montreal SRL"
          titleCard="Nuestra ubicación"
          sx={{
            flex: 1,
            mr: 2,
            maxWidth: { md: "50%" },
            aspectRatio: { xs: "1", md: "16/9" },
          }}
        />
        <Box>
          <TitleH1 sx={{ color: palette.primary[100] }}>
            Información de Contacto
          </TitleH1>
          <Box sx={{ mb: 2 }}>
            <Text2 sx={{ color: palette.primary[100] }}>📞 341-3389977</Text2>
            <Text2 sx={{ color: palette.primary[100] }}>📞 3476-619576</Text2>
            <Text2 sx={{ color: palette.primary[100] }}>📞 3476-224447</Text2>
            <Text2 sx={{ color: palette.primary[100] }}>
              ✉️ talleresmontrealsrl@gmail.com
            </Text2>
            <Text2 sx={{ color: palette.primary[100] }}>
              📍 José Márquez 856, San Lorenzo, Santa Fe
            </Text2>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
