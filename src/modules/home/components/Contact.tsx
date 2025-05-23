// src/modules/home/components/Contact.tsx
import React from "react";
import { Box, Container, useTheme } from "@mui/material";
import { SubtitleXL, Text1, Title1, TitleXL } from "@/theme/textStyles";
import { GoogleMapCard } from "./GoogleMap";
import { ContactForm } from "./ContactForm";
import { contactInfo } from "@/shared/Layout/components/Footer";


export const Contact: React.FC = () => {
  const theme = useTheme();
  const { palette } = theme;

  return (
    <Box
      component="section"
      id="contact"
      sx={{ 
        paddingY: "4rem", 
        backgroundColor: "primary.main", 
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TitleXL
        id="contact-title"
        sx={{
          color: palette.primary[100],
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Contacto
      </TitleXL>
      <SubtitleXL sx={{ color: palette.primary[100], textAlign: "center", marginBottom: "2rem", paddingX: {xs: "2rem", md: "unset"} }}>
        ¿Tienes alguna pregunta específica? Contáctanos, estamos para ayudarte.
      </SubtitleXL>
      <Container maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          width: "100vw",
          overflow: "hidden",
          gap: {xs: "2rem", md: "3rem", lg: "4rem", xl: "5rem"},
        }}
      >
        <ContactForm
          sx={{
            maxWidth: { xs: "unset", md: "40vw" },
            width: { xs: "min(90vw, 400px)", md: "unset" },
            flex: 1,
          }}
        />
        {/* Contenido: info + formulario */}

        <Box sx={{
          flex: 1,
          maxWidth: { xs: "unset", md: "40vw" },
          width: { xs: "min(90vw, 400px)", md: "unset" },
        }}>
          <GoogleMapCard
            srcMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.9621951281188!2d-60.7383915333192!3d-32.76673763876167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b65b1be6d77371%3A0xddf8f20133c12343!2sTalleres%20Montreal%20SRL!5e0!3m2!1ses!2sar!4v1747424640892!5m2!1ses!2sar"
            titleMap="Ubicación de Talleres Montreal SRL"
            titleCard="Nuestra ubicación"
            sx={{
              maxWidth: {xs: "90vw", sm: "unset"},
              aspectRatio: { xs: "1", md: "16/9" },
            }}
          />
          <Title1 sx={{ color: palette.primary[100], marginTop: "2rem", marginBottom: "1rem" }}>
            Información de Contacto
          </Title1>
          <Box sx={{ mb: 2, display: "flex", flexDirection: "column", gap: 1 }}>
            {contactInfo.map((item, index) => (
              <Text1 key={index} sx={{ color: palette.primary[100], display: "flex", alignItems: "center", gap: 1 }}>
                {item.icon}
                {item.text}
              </Text1>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
