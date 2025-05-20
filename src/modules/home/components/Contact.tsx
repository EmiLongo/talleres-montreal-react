// src/modules/home/components/Contact.tsx
import React from "react";
import { Box, useTheme } from "@mui/material";
import WhatsApp from "@mui/icons-material/WhatsApp";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { SubtitleXL, Text2, TitleH1, TitleXL } from "@/theme/textStyles";
import { GoogleMapCard } from "./GoogleMap";
import { ContactForm } from "./ContactForm";

export const Contact: React.FC = () => {
  const theme = useTheme();
  const { palette } = theme;

  return (
    <Box
      component="section"
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
      <SubtitleXL sx={{ color: palette.primary[100], textAlign: "center", marginBottom: "2rem" }}>
        ¿Tienes alguna pregunta específica? Contáctanos, estamos para ayudarte.
      </SubtitleXL>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <ContactForm
          sx={{
            flex: 1,
            maxWidth: { xs: "100vw", md: "50vw" },
            width: { xs: "min(90vw, 400px)", sm: "400px", md: "600px" },
          }}
        />
        {/* Contenido: info + formulario */}

        <Box
          sx={{
            flex: 1,
          }}
        >
          <GoogleMapCard
            srcMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.9621951281188!2d-60.7383915333192!3d-32.76673763876167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b65b1be6d77371%3A0xddf8f20133c12343!2sTalleres%20Montreal%20SRL!5e0!3m2!1ses!2sar!4v1747424640892!5m2!1ses!2sar"
            titleMap="Ubicación de Talleres Montreal SRL"
            titleCard="Nuestra ubicación"
            sx={{
              maxWidth: {xs: "90vw", md: "45dvw"},
              aspectRatio: { xs: "1", md: "16/9" },
            }}
          />
          <TitleH1 sx={{ color: palette.primary[100], marginTop: "2rem", marginBottom: "1rem" }}>
            Información de Contacto
          </TitleH1>
          <Box sx={{ mb: 2, display: "flex", flexDirection: "column", gap: 1 }}>
            <Text2 sx={{ color: palette.primary[100], display: "flex", alignItems: "center", gap: 1 }}><WhatsApp />Dpto Técnico: 341-3389977</Text2>
            <Text2 sx={{ color: palette.primary[100], display: "flex", alignItems: "center", gap: 1 }}><WhatsApp />Administración: 3476-619576</Text2>
            <Text2 sx={{ color: palette.primary[100], display: "flex", alignItems: "center", gap: 1 }}><PhoneIcon />Fijo: 3476-224447</Text2>
            <Text2 sx={{ color: palette.primary[100], display: "flex", alignItems: "center", gap: 1 }}><EmailIcon /> talleresmontrealsrl@gmail.com</Text2>
            <Text2 sx={{ color: palette.primary[100], display: "flex", alignItems: "center", gap: 1 }}><LocationPinIcon /> Av José Márquez 856, San Lorenzo, Santa Fe</Text2>
            

          </Box>
        </Box>
      </Box>
    </Box>
  );
};
