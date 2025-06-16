// src/modules/home/components/Equipment.tsx
import React from "react";
import { Box, useTheme } from "@mui/material";
import { Text3, Title2 } from "@theme/textStyles";
import { SectionTitle } from "./Styled";
import torno1 from "@img/equipment/12-torno_paralelo-hidrocopiador.webp";
import torno2 from "@img/equipment/13-torno_paralelo-1000.webp";
import torno3 from "@img/equipment/14-torno_paralelo-1070.webp";
import alesadora from "@img/equipment/1-alesadora.webp";
import limadoras from "@img/equipment/7-limadora.webp";
import fresadora from "@img/equipment/5-fresadora.webp";
import cepillo from "@img/equipment/2-cepillo_hidráulico.webp";
import perforadoraPie from "@img/equipment/9-perforadora_pie.webp";
import perforadoraRadial from "@img/equipment/8-perforadora_radial.webp";
import prensaHidraulica from "@img/equipment/10-prensa_hidráulica.webp";
import cortadoraMetales from "@img/equipment/3-cortadora_metales.webp";
import cortePlasma from "@img/equipment/4-cortadora_plasma.webp";
import soldadora from "@img/equipment/11-soldadoras.webp";
import fundidora from "@img/equipment/6-fundidora.webp";
import { Paper } from "@mui/material";

export const Equipment: React.FC = () => {
  const { palette } = useTheme();
  const equipment = [
    {title: "Torno Paralelo",
    description: "con hidrocopiador, diám 400mm, largo 1000mm",
    img: torno1,
    },
    {title: "Torno Paralelo",
    description: "diám 1000mm, largo 4060mm",
    img: torno2,
    },
    {title: "Torno Paralelo",
    description: "diám 1070mm, largo 3000mm",
    img: torno3,
    },
    {title: "Alesadora",
    description: "diám husillo 70mm",
    img: alesadora,
    },
    {title: "Limadoras",
    description: "largo carrera 600mm",
    img: limadoras,
    },
    {title: "Fresadora",
    description: "",
    img: fresadora,
    },
    {title: "Cepillo Hidráulico",
    description: "",
    img: cepillo,
    },
    {title: "Perforadora Radial",
    description: "largo bandera 1500mm",
    img: perforadoraRadial,
    },
    {title: "Perforadoras de Pie",
    description: "",
    img: perforadoraPie,
    },
    {title: "Prensa Hidráulica",
    description: "",
    img: prensaHidraulica,
    },
    {title: "Cortadora de Metales",
    description: "",
    img: cortadoraMetales,
    },
    {title: "Corte Plasma",
    description: "",
    img: cortePlasma,
    },
    {title: "Soldadoras",
    description: "",
    img: soldadora,
    },
    {title: "Fundidora",
    description: "",
    img: fundidora,
    },
  ]
  return (
    <Box
      component="section"
      sx={{
      paddingX: {xs:"2rem", sm:"3rem", md:"1.5rem", lg:"1.5rem", xl:"3.5rem"},
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
      {/* <SectionSubTitle>
      Nos especializamos en brindar soluciones industriales de calidad con personal altamente calificado.
      </SectionSubTitle> */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr", md: "1fr 1fr 1fr 1fr 1fr" },
          gap: {xs: "1rem", sm: "2rem", md: "1rem", lg: "2rem", xl: "2rem"},
          // paddingX: {xs: "1rem", sm: "2rem", md: "2rem", lg: "3rem", xl: "4rem"},
          paddingY: {xs: "2rem", lg: "2rem"},
          maxWidth: "1280px",
          marginX: "auto",
        }}
      >
        {equipment.map((equip, index) => (
          <Paper key={`equip-${index}`}
            elevation={3}
            sx={{
              borderRadius: "10px",
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
            <Box sx={{ 
              width: "100%", 
              height: "33.33%", 
              display: "flex", 
              flexDirection: "column ", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: {xs:"3px", md:"5px", lg:"7px"} 
            }}>
              <Title2 sx={{ 
                textAlign: "center", 
                color: "text.primary", 
                textWrap: "wrap", 
                textTransform: "none", 
                width: "100%", 
                background: "background.paper",
                paddingX: {xs: "1rem", md: "", lg: "0.5rem"},
                lineHeight: "0.9",
                transform: {xs: "scale(90%)", md: "unset"},
              }}>
                {equip.title}
              </Title2>
              <Text3 sx={{ 
                textAlign: "center", 
                color: "text.primary", 
                textWrap: "wrap", 
                textTransform: "none", 
                width: "100%", 
                background: "background.paper",
                paddingX: {xs: "1rem", md: "", lg: "0.5rem"},
                lineHeight: "0.9",
                transform: {xs: "scale(75%)", md: "scale(85%)"},
              }}>
              {equip.description}
              </Text3>
            </Box>
          </Paper>
          ))
        }
      </Box>
      <Box component={"span"} id="contact" />
    </Box>
  );
};