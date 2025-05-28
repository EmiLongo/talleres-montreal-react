// src/modules/home/components/Equipment.tsx
import { Box, useTheme } from "@mui/material";
import React from "react";
import { Title2 } from "@theme/textStyles";
import { SectionSubTitle, SectionTitle } from "./Styled";
import tornos from "@img/equipment/torno.png";
import alesadora from "@img/equipment/alesadora.png";
import limadoras from "@img/equipment/limadora.png";
import fresadora from "@img/equipment/fresadora.png";
import perforadoraPie from "@img/equipment/taladro-pie.png";
import perforadoraRadial from "@img/equipment/taladro-radial.png";
import prensaHidraulica from "@img/equipment/prensa-hidraulica.png";
import cortadoraMetales from "@img/equipment/cortadora-metales.png";
import cortePlasma from "@img/equipment/corte-plasma.png";
import soldadora from "@img/equipment/soldadora.png";

export const Equipment: React.FC = () => {
  const { palette } = useTheme();
  const equipment = [
    {title: "Tornos Paralelos",
    img: tornos,
    },
    {title: "Alesadora",
    img: alesadora,
    },
    {title: "Limadoras",
    img: limadoras,
    },
    {title: "Fresadora",
    img: fresadora,
    },
    {title: "Perforadora Radial",
    img: perforadoraRadial,
    },
    {title: "Perforadoras de Pie",
    img: perforadoraPie,
    },
    {title: "Prensa Hidráulica",
    img: prensaHidraulica,
    },
    {title: "Cortadora de Metales",
    img: cortadoraMetales,
    },
    {title: "Corte Plasma",
    img: cortePlasma,
    },
    {title: "Soldadoras",
    img: soldadora,
    },
  ]
  return (
    <Box
      component="section"
      sx={{
      paddingX: {xs:"1rem", lg:"1.5rem", xl:"3.5rem"},
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
          gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr", md: "1fr 1fr 1fr 1fr 1fr" },
          gap: {xs: "1rem", sm: "2rem", md: "2rem", lg: "3rem", xl: "4rem"},
          // paddingX: {xs: "1rem", sm: "2rem", md: "2rem", lg: "3rem", xl: "4rem"},
          paddingY: {xs: "2rem", lg: "2rem"},
          maxWidth: "1280px",
          marginX: "auto",
        }}
      >
        {equipment.map((equip, index) => (
          <Box key={`equip-${index}`}
            sx={{
              borderRadius: "10px",
              border: `3px solid ${palette.primary[400]}`,
              overflow: "hidden",
              aspectRatio: "1/1",
              display: "flex",
              flexDirection: "column",

            }}
          >
            <Box
              sx={{
                height: "66.66%",
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Box
                component={"img"}
                src={equip.img}
                loading="lazy"
                decoding="async"
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                alt={equip.title}
              />
            </Box>
            <Box sx={{ width: "100%", height: "33.33%", display: "flex", alignItems: "center", justifyContent: "center", }}>
              <Title2 sx={{ 
                textAlign: "center", 
                color: "text.primary", 
                textWrap: "wrap", 
                textTransform: "none", 
                width: "100%", 
                background: "background.paper",
                paddingX: {xs: "1rem", md: "", lg: "0.5rem"},
                lineHeight: "1.2",
              }}>
                {equip.title}
              </Title2>
            </Box>
          </Box>
          ))
        }
      </Box>
      <Box component={"span"} id="contact" />
    </Box>
  );
};