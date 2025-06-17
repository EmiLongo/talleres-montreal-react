// src/modules/home/components/Equipment.tsx
import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Text3, Title2 } from "@theme/textStyles";
import { SectionTitle } from "./Styled";
import torno1Webp from "@img/equipment/12-torno_paralelo-hidrocopiador.webp";
import torno2Webp from "@img/equipment/13-torno_paralelo-1000.webp";
import torno3Webp from "@img/equipment/14-torno_paralelo-1070.webp";
import alesadoraWebp from "@img/equipment/1-alesadora.webp";
import limadorasWebp from "@img/equipment/7-limadora.webp";
import fresadoraWebp from "@img/equipment/5-fresadora.webp";
import cepilloWebp from "@img/equipment/2-cepillo_hidráulico.webp";
import perforadoraPieWebp from "@img/equipment/9-perforadora_pie.webp";
import perforadoraRadialWebp from "@img/equipment/8-perforadora_radial.webp";
import prensaHidraulicaWebp from "@img/equipment/10-prensa_hidráulica.webp";
import cortadoraMetalesWebp from "@img/equipment/3-cortadora_metales.webp";
import cortePlasmaWebp from "@img/equipment/4-cortadora_plasma.webp";
import soldadoraWebp from "@img/equipment/11-soldadoras.webp";
import fundidoraWebp from "@img/equipment/6-fundidora.webp";
import torno1Jpg from "@img/equipment/12-torno_paralelo-hidrocopiador.jpg";
import torno2Jpg from "@img/equipment/13-torno_paralelo-1000.jpg";
import torno3Jpg from "@img/equipment/14-torno_paralelo-1070.jpg";
import alesadoraJpg from "@img/equipment/1-alesadora.jpg";
import limadorasJpg from "@img/equipment/7-limadora.jpg";
import fresadoraJpg from "@img/equipment/5-fresadora.jpg";
import cepilloJpg from "@img/equipment/2-cepillo_hidráulico.jpg";
import perforadoraPieJpg from "@img/equipment/9-perforadora_pie.jpg";
import perforadoraRadialJpg from "@img/equipment/8-perforadora_radial.jpg";
import prensaHidraulicaJpg from "@img/equipment/10-prensa_hidráulica.jpg";
import cortadoraMetalesJpg from "@img/equipment/3-cortadora_metales.jpg";
import cortePlasmaJpg from "@img/equipment/4-cortadora_plasma.jpg";
import soldadoraJpg from "@img/equipment/11-soldadoras.jpg";
import fundidoraJpg from "@img/equipment/6-fundidora.jpg";
import torno1Avif from "@img/equipment/12-torno_paralelo-hidrocopiador.avif";
import torno2Avif from "@img/equipment/13-torno_paralelo-1000.avif";
import torno3Avif from "@img/equipment/14-torno_paralelo-1070.avif";
import alesadoraAvif from "@img/equipment/1-alesadora.avif";
import limadorasAvif from "@img/equipment/7-limadora.avif";
import fresadoraAvif from "@img/equipment/5-fresadora.avif";
import cepilloAvif from "@img/equipment/2-cepillo_hidráulico.avif";
import perforadoraPieAvif from "@img/equipment/9-perforadora_pie.avif";
import perforadoraRadialAvif from "@img/equipment/8-perforadora_radial.avif";
import prensaHidraulicaAvif from "@img/equipment/10-prensa_hidráulica.avif";
import cortadoraMetalesAvif from "@img/equipment/3-cortadora_metales.avif";
import cortePlasmaAvif from "@img/equipment/4-cortadora_plasma.avif";
import soldadoraAvif from "@img/equipment/11-soldadoras.avif";
import fundidoraAvif from "@img/equipment/6-fundidora.avif";
import { Paper } from "@mui/material";

export const Equipment: React.FC = () => {
  const theme = useTheme();
  const isMini = useMediaQuery(theme.breakpoints.down(400));
  const  { palette } = theme;
  const equipment = [
    {title: "Torno Paralelo",
    description: "con hidrocopiador, diám 400mm, largo 1000mm",
    img: [torno1Webp, torno1Avif, torno1Jpg]
    },
    {title: "Torno Paralelo",
    description: "diám 1000mm, largo 4060mm",
    img: [torno2Webp, torno2Avif, torno2Jpg]
    },
    {title: "Torno Paralelo",
    description: "diám 1070mm, largo 3000mm",
    img: [torno3Webp, torno3Avif, torno3Jpg]
    },
    {title: "Alesadora",
    description: "diám husillo 70mm",
    img: [alesadoraWebp, alesadoraAvif, alesadoraJpg]
    },
    {title: "Limadoras",
    description: "largo carrera 600mm",
    img: [limadorasWebp, limadorasAvif, limadorasJpg]
    },
    {title: "Fresadora",
    description: "",
    img: [fresadoraWebp, fresadoraAvif, fresadoraJpg]
    },
    {title: "Cepillo Hidráulico",
    description: "",
    img: [cepilloWebp, cepilloAvif, cepilloJpg]
    },
    {title: "Perforadora Radial",
    description: "largo bandera 1500mm",
    img: [perforadoraRadialWebp, perforadoraRadialAvif, perforadoraRadialJpg]
    },
    {title: "Perforadoras de Pie",
    description: "",
    img: [perforadoraPieWebp, perforadoraPieAvif, perforadoraPieJpg]
    },
    {title: "Prensa Hidráulica",
    description: "",
    img: [prensaHidraulicaWebp, prensaHidraulicaAvif, prensaHidraulicaJpg]
    },
    {title: "Cortadora de Metales",
    description: "",
    img: [cortadoraMetalesWebp, cortadoraMetalesAvif, cortadoraMetalesJpg]
    },
    {title: "Corte Plasma",
    description: "",
    img: [cortePlasmaWebp, cortePlasmaAvif, cortePlasmaJpg]
    },
    {title: "Soldadoras",
    description: "",
    img: [soldadoraWebp, soldadoraAvif, soldadoraJpg]
    },
    {title: "Fundidora",
    description: "",
    img: [fundidoraWebp, fundidoraAvif, fundidoraJpg]
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
              <Box component="picture"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}>
                <source srcSet={equip.img[0]} type="image/avif" />
                <source srcSet={equip.img[1]} type="image/webp" />
                <Box
                  component="img"
                  src={equip.img[2]}
                  alt={equip.title}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ 
              width: "100%", 
              height: "33.33%", 
              display: "flex", 
              flexDirection: "column ", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: {xs: isMini ? "1px" : "3px", md:"5px", lg:"7px"} 
            }}>
              <Title2 sx={{ 
                textAlign: "center", 
                color: "text.primary", 
                // textWrap: "wrap", 
                textTransform: "none", 
                width: "100%", 
                background: "background.paper",
                paddingX: {xs: "", lg: "0.5rem"},
                lineHeight: "0.9",
                transform: {xs: isMini ? "scale(80%)" : "scale(90%)", md: "unset"},
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
                paddingX: {xs:  "", lg: "0.5rem"},
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