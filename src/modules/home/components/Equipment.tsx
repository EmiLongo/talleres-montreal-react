// src/modules/home/components/Equipment.tsx
import { Box, useTheme } from "@mui/material";
import React from "react";
import { Title3 } from "@theme/textStyles";
import { SectionSubTitle, SectionTitle } from "./Styled";
import tornos from "@img/equipment/torno.webp";
import alesadora from "@img/equipment/alesadora.jpg";
import limadoras from "@img/equipment/limadora.jpg";
import fresadora from "@img/equipment/fresa.webp";
import perforadoraPie from "@img/equipment/taladro-pie.avif";
import perforadoraRadial from "@img/equipment/taladro-radial.jpg";
import prensaHidraulica from "@img/equipment/prensa_hidraulica.jpg";
import cortadoraMetales from "@img/equipment/cortadora-metales.jpg";
import cortePlasma from "@img/equipment/corten-plasma.jpg";
import soldadora from "@img/equipment/soldadora.jpg";

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
              gap: "1rem",
              paddingBottom: "0.5rem",
              backgroundImage: `url(${equip.img})` ,
              backgroundSize: '100% auto',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
            }}
          >
            <Title3 sx={{ textAlign: "center", color: "background.paper", textWrap: "wrap", textTransform: "none" }}>
              {equip.title}
            </Title3>
          </Box>
          ))
        }
      </Box>
    </Box>
  );
};