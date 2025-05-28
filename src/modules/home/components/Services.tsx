// src/modules/home/components/Services.tsx
import { Box, useTheme } from "@mui/material";
import React from "react";
import { Text1, Title1 } from "@theme/textStyles";
import { SectionSubTitle, SectionTitle } from "./Styled";
import asesoramientoTecnico from "@img/services/asesoramiento_tecnico.gif";
import mecanizadoPrecision from "@img/services/mecanizado_precision.gif";
import modeladoComplejo from "@img/services/modelado_complejo.gif";
import reparacionFabricacion from "@img/services/reparacion_fabricacion.gif";
import transporte from "@img/services/transporte.gif";

const services = [
  {
    title: "Mecanizado de Precisión",
    description: "Mecanizado de piezas de alta precisión y calidad en amplia variedad de materiales.",
    icon: mecanizadoPrecision,
  },
  {
    title: "Reparación y Fabricación",
    description: "Reparación y fabricación de equipos y repuestos industriales según sus necesidades.",
    icon: reparacionFabricacion,
  },
  {
    title: "Asesoramiento Técnico",
    description: "Determinación de materiales, calidad de ajuste y tratamiento térmico para sus proyectos.",
    icon: asesoramientoTecnico,
  },
  {
    title: "Modelado Complejo",
    description: "Fabricacion de modelos para crear piezas en fundicion con formas irregulares o detalles complejos.",
    icon: modeladoComplejo,
  },
  {
    title: "Servicio de Transporte",
    description: "Ofrecemos entrega de trabajos y retiro de muestras o piezas a reparar.",
    icon: transporte,
  },
]
export const Services: React.FC = () => {
  const theme = useTheme();
  const { palette } = theme;
  return (
    <Box
      component="section"
      sx={{
      paddingX: {xs:"2rem", md: "unset"},
      paddingBottom: {xs:"3rem", lg:"5rem", xl:"6rem"},
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: palette.primary[100],
      }}
    >
      <SectionTitle id="services-title" >
        Servicios Destacados
      </SectionTitle>
      <SectionSubTitle sx={{ marginBottom: {xs:"3rem", xl:"4rem"}}}>
      Nos especializamos en brindar soluciones industriales de calidad con personal altamente calificado.
      </SectionSubTitle>
      <Box
        sx={{
          display: "flex",
          // gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", xl: "1fr 1fr 1fr" },
          gap: "4rem",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "1280px", 
        }}
      >
        {services.map((service, index) => (
          <Box
            key={`service-${index}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              width: {xs: "100%", sm: "45%", md: "30%"},
              maxWidth: {xs: "400px", md: "unset"},
              // padding: {xs: "1rem", sm: "2rem", md: "2rem"},
            }}
          >
            <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "162px",
              aspectRatio: "1/1",
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
            >
              <Box 
                component={"img"} 
                src={service.icon} 
                alt={service.title} 
                width={"96px"} 
                height={"96px"} 
                loading="lazy"
                decoding="async"
              />
            </Box>
            <Box>
              <Title1 sx={{ textAlign: "center", mb: "1rem", textWrap: "wrap", textTransform: "capitalize" }}>
                {service.title}
              </Title1>
              <Text1 sx={{ textAlign: "center", textWrap: "wrap" }}>
                {service.description}
              </Text1>
            </Box>
          </Box>
          ))
        }
      </Box>
      <Box component={"span"} id="procedures" />
    </Box>
  );
};