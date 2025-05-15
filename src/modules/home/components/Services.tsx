// src/modules/home/components/Services.tsx
import { Box } from "@mui/material";
import React from "react";
import truckIcon from "@img/services/container-truck.svg";
import csrIcon from "@img/services/csr.svg";
import managerIcon from "@img/services/manager.svg";
import technicalSupportIcon from "@img/services/technical-support.svg";
import { P, TitleH2, TitleXL } from "@theme/textStyles";

export const Services: React.FC = () => {
  const services = [
    {
      title: "Mecanizado de Precisión",
      description: "Mecanizado de piezas de alta precisión y calidad en amplia variedad de materiales.",
      icon: managerIcon,
    },
    {
      title: "Reparación y Fabricación",
      description: "Reparación y fabricación de equipos y repuestos industriales según sus necesidades.",
      icon: technicalSupportIcon,
    },
    {
      title: "Asesoramiento Técnico",
      description: "Determinación de materiales, calidad de ajuste y tratamiento térmico para sus proyectos.",
      icon: csrIcon,
    },
    {
      title: "Servicio de Transporte",
      description: "Ofrecemos entrega de trabajos y retiro de muestras o piezas a reparar.",
      icon: truckIcon,
    },
  ]
  return (
    <Box
      component="section"
      id="services-container"
      sx={{
      padding: {xs:"2rem", lg:"3rem", xl:"4rem"},
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "background.paper",
      }}
    >
      <TitleXL id="services" sx={{ color: "primary.main", marginTop: {xs:"2rem", lg:"3rem", xl:"4rem"}, marginBottom: "1rem" }}>
        Servicios Destacados
      </TitleXL>
      <P sx={{
        fontSize: {xl: '1.5rem', lg: '1.375rem', md: '1.25rem', sm: '1.2rem', xs: '1.2rem'},
        color: "primary.main",
        maxWidth: "600px",
        margin: "0 auto",
      }}>
      Nos especializamos en brindar soluciones industriales de calidad con personal altamente calificado.
      </P>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr" },
          gap: {xs: "1rem", sm: "2rem", md: "2rem", lg: "3rem", xl: "4rem"},
          paddingX: {xs: "1rem", sm: "2rem", md: "2rem", lg: "3rem", xl: "4rem"},
          paddingY: {xs: "2rem", lg: "3rem", xl: "4rem"},
        }}
      >
        {services.map((service, index) => (
          <Box
            key={`service-${index}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              marginBottom: "2rem",
              padding: {xs: "1rem", sm: "2rem", md: "2rem"},
              backgroundColor: "rgba( 163, 164, 236, 0.25 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 6px )",
              WebkitBackdropFilter: "blur( 6px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
          >
            <img src={service.icon} alt={service.title} />
            <Box>
              <TitleH2 sx={{ textAlign: "center", color: "primary.main", mb: "1rem", textWrap: "wrap" }}>
                {service.title}
              </TitleH2>
              <P sx={{ textAlign: "center", color: "primary.main", textWrap: "wrap" }}>
                {service.description}
              </P>
            </Box>
          </Box>
          ))
        }
      </Box>
    </Box>
  );
};