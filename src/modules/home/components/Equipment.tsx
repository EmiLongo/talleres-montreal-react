// src/modules/home/components/Equipment.tsx
import { alpha, Box, useTheme } from "@mui/material";
import React from "react";
import { Title3 } from "@theme/textStyles";
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
              height: "130px",
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              backgroundImage: `url(${equip.img})` ,
              backgroundSize: '100% auto',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              overflow: "hidden",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Title3 sx={{ 
                textAlign: "center", 
                color: "background.paper", 
                textWrap: "wrap", 
                textTransform: "none", 
                width: "100%", 
                padding: "1rem 1rem 0.5rem 1rem",
                margin: "0 auto" ,
                background: `linear-gradient(
                180deg,
                transparent 0%,
                ${alpha("#080808", 0.3)} 20%,
                ${alpha("#080808", 0.7)} 100%)`,
              }}>
                {equip.title}
              </Title3>
            </Box>
          </Box>
          ))
        }
      </Box>
    </Box>
  );
};