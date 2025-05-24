// src/modules/home/components/Equipment.tsx
import { Box, useTheme } from "@mui/material";
import React from "react";
import { Title2 } from "@theme/textStyles";
import { SectionSubTitle, SectionTitle } from "./Styled";

export const Equipment: React.FC = () => {
  const { palette } = useTheme();
  const equipment = [
    {title: "Tornos Paralelos",},
    {title: "Alesadora",},
    {title: "Limadoras",},
    {title: "Fresadora",},
    {title: "Perforadora Radial",},
    {title: "Perforadoras de Pie",},
    {title: "Prensa Hidráulica",},
    {title: "Cortadora de Metales",},
    {title: "Corte Plasma",},
    {title: "Soldadoras",},
  ]
  return (
    <Box
      component="section"
      id="equipment"
      sx={{
      paddingX: {xs:"2rem", lg:"3rem", xl:"4rem"},
      paddingBottom: {xs:"2rem", lg:"4rem", xl:"5rem"},
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: palette.primary[100],
      }}
    >
      <SectionTitle id="equipment-title">
        Nuestro Equipamiento
      </SectionTitle>
      <SectionSubTitle>
      Nos especializamos en brindar soluciones industriales de calidad con personal altamente calificado.
      </SectionSubTitle>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr" },
          gap: {xs: "1rem", sm: "2rem", md: "2rem", lg: "3rem", xl: "4rem"},
          paddingX: {xs: "1rem", sm: "2rem", md: "2rem", lg: "3rem", xl: "4rem"},
          paddingY: {xs: "2rem", lg: "2rem"},
        }}
      >
        {equipment.map((equip, index) => (
          <Box
            key={`equip-${index}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              // marginBottom: "1rem",
              padding: {xs: "0.5rem 1rem", sm: "1rem 2rem", md: "1rem 2rem"},
              backgroundColor: "rgb(163, 164, 236)",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 6px )",
              WebkitBackdropFilter: "blur( 6px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
          >
            <Title2 sx={{ textAlign: "center", color: "primary.main", textWrap: "wrap" }}>
              {equip.title}
            </Title2>
          </Box>
          ))
        }
      </Box>
    </Box>
  );
};