// src/modules/home/components/Contact.tsx
import React from "react";
import { Box, Container } from "@mui/material";
import { Text1, Title1 } from "@/theme/textStyles";
import { GoogleMapCard } from "./GoogleMap";
import { ContactForm } from "./ContactForm";
import { contactInfo } from "@/shared/Layout/components/Footer";
import { SectionSubTitle, SectionTitle } from "./Styled";


export const Contact: React.FC = () => {

  return (
    <Box
      component="section"
      id="contact"
      sx={{ 
        paddingY: "4rem", 
        backgroundColor: "background.paper", 
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SectionTitle id="contact-title">
        Contacto
      </SectionTitle>
      <SectionSubTitle>
        ¿Tienes alguna pregunta específica? Contáctanos, estamos para ayudarte.
      </SectionSubTitle>
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
        <Box sx={{
          flex: 1,
          maxWidth: { xs: "unset", md: "40vw" },
          width: { xs: "min(90vw, 400px)", md: "unset" },
        }}>
          <Title1 sx={{marginBottom: "1rem" }}>
            Información de Contacto
          </Title1>
          <Box sx={{ mb: 2, display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between",flexWrap: "wrap" }}>
            {contactInfo.map((item, index) => {
              if (item.type !== "phone") return null;
              return (
              <Box sx={{ display: "flex", flexDirection: "column"}}>
                <Text1 key={`text-${item.type}-${index}`} sx={{ display: "flex", alignItems: "center", gap: 1, fontWeight: 600 }}>
                  {item.title}
                </Text1>
                <Text1 key={`text-${item.type}-${index}`} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {item.icon}
                  {item.text}
                </Text1>
              </Box>
            )})}
          </Box>
            {contactInfo.map((item, index) => {
              if (item.type === "phone") return null;
              return (
              <Text1 key={`text-${item.type}-${index}`} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {item.icon}
                {item.text}
              </Text1>
            )})}
          </Box>
          <GoogleMapCard
            srcMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.9621951281188!2d-60.7383915333192!3d-32.76673763876167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b65b1be6d77371%3A0xddf8f20133c12343!2sTalleres%20Montreal%20SRL!5e0!3m2!1ses!2sar!4v1747424640892!5m2!1ses!2sar"
            titleMap="Ubicación de Talleres Montreal SRL"
            titleCard="Nuestra ubicación"
            sx={{
              maxWidth: {xs: "90vw", sm: "unset"},
              aspectRatio: { xs: "1", md: "16/9" },
            }}
          />
        </Box>
        <ContactForm
          sx={{
            maxWidth: { xs: "unset", md: "40vw" },
            width: { xs: "min(90vw, 400px)", md: "unset" },
            flex: 1,
          }}
        />
      </Container>
    </Box>
  );
};
