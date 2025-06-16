// src/modules/home/components/Services.tsx
import { Box, keyframes, Paper, useTheme } from "@mui/material";
import React from "react";
import { Text1, Title1 } from "@theme/textStyles";
import { SectionSubTitle, SectionTitle } from "./Styled";
import asesoramientoTecnico from "@img/services/asesoramiento_tecnico.gif";
import mecanizadoPrecision from "@img/services/mecanizado_precision.gif";
import modeladoComplejo from "@img/services/modelado_complejo.gif";
import reparacionFabricacion from "@img/services/reparacion_fabricacion.gif";
import transporte from "@img/services/transporte.gif";
import elaboracionPlanos from "@img/services/elaboracion_planos.gif";
import favourite from "@img/services/favourite.svg";

const services = [
  {
    title: "Asesoramiento Técnico",
    description: "Determinación de materiales, calidad de ajuste y tratamiento térmico para sus proyectos.",
    icon: asesoramientoTecnico,
    isFavourite: true,
  },
  {
    title: "Modelado Complejo",
    description: "Fabricacion de modelos para crear piezas en fundicion con formas irregulares o detalles complejos.",
    icon: modeladoComplejo,
    isFavourite: true,
  },
  {
    title: "Servicio de Transporte",
    description: "Ofrecemos entrega de trabajos y retiro de muestras o piezas a reparar.",
    icon: transporte,
    isFavourite: true,
  },
  {
    title: "Mecanizado de Precisión",
    description: "Mecanizado de piezas de alta precisión y calidad en amplia variedad de materiales.",
    icon: mecanizadoPrecision,
    isFavourite: false,
  },
  {
    title: "Relevamiento y Elaboración de Planos",
    description: "Registramos medidas, estructuras y condiciones existentes y elaboramos planos técnicos detallados.",
    icon: elaboracionPlanos,
    isFavourite: false,
  },
  {
    title: "Reparación y Fabricación",
    description: "Reparación de equipos y fabricación de componentes industriales según sus necesidades.",
    icon: reparacionFabricacion,
    isFavourite: false,
  },
]

const rotateScaleUp = keyframes`
  0% {
    transform: scale(1) rotate3d(-1, 1, 0, 0deg);
  }
  10% {
    transform: scale(1.5) rotate3d(-1, 1, 0, 180deg);
  }
  20% {
    transform: scale(1) rotate3d(-1, 1, 0, 360deg);
  }
  100% {
    transform: scale(1) rotateZ(360deg);
  }
`;

const ServiceCard: React.FC<{ service: typeof services[number] }> = ({ service }) => {
  const theme = useTheme();
  const { palette } = theme;
  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          width: {xs: "100%", sm: "45%", md: "27%"},
          maxWidth: {xs: "400px", md: "unset"},
          padding: {xs: "1rem", sm: "2rem", md: "2rem"},
        }}
      > 
      <Paper
      elevation={3}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "162px",
        aspectRatio: "1/1",
        borderRadius: "50%",
        border: service.isFavourite ? `4px solid ${palette.primary[400]}` : "none",
        backgroundColor: "#fff",
        // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
      >
        {service.isFavourite && <Box component={"img"} src={favourite} alt={service.title} width={"42px"} height={"42px"} loading="lazy" decoding="async" 
          sx={{position: "absolute", top: "4px", right: "4px",
            animation: `${rotateScaleUp} 4s linear infinite`,
          }}
          />}
        <Box 
          component={"img"} 
          src={service.icon} 
          alt={service.title} 
          width={"96px"} 
          height={"96px"} 
          loading="lazy"
          decoding="async"
        />
      </Paper>
      <Box>
        <Title1 sx={{ textAlign: "center", mb: "1rem", textWrap: "wrap", textTransform: "capitalize" }}>
          {service.title}
        </Title1>
        <Text1 sx={{ textAlign: "center", textWrap: "wrap" }}>
          {service.description}
        </Text1>
      </Box>
    </Box>
  )
}
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
        ¿QUÉ HACEMOS?
      </SectionTitle>
      <SectionSubTitle sx={{ marginBottom: {xs:"3rem", xl:"4rem"}}}>
      Nos especializamos en brindar soluciones industriales de calidad, con maquinaria moderna y personal altamente capacitado que garantizan la excelencia en cada proyecto.
      </SectionSubTitle>
      <Box
        sx={{
          display: "flex",
          // gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", xl: "1fr 1fr 1fr" },
          gap: {xs: "4rem", sm: "1rem", md: "4rem", xl: "4rem"},
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "1280px", 
        }}
      >
        {services.filter((service) => service.isFavourite === false).map((service, index) => (
          <ServiceCard service={service} key={`service-${index}`} />
        ))}
      </Box>
      <SectionTitle id="services-title" >
      ¿EN QUÉ NOS DESTACAMOS?
      </SectionTitle>
      <Box
        sx={{
          display: "flex",
          // gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr", xl: "1fr 1fr 1fr" },
          gap: {xs: "4rem", sm: "1rem", md: "4rem", xl: "4rem"},
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "1280px", 
        }}
      >
      {services.filter((service) => service.isFavourite === true).map((service, index) => (
          <ServiceCard service={service} key={`favourite-service-${index}`} />
      ))}
      </Box>

      <Box component={"span"} id="services" />
    </Box>
  );
};