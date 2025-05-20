// src/modules/home/components/Procedures.tsx
import { Box } from "@mui/material";
import React, { useState } from "react";
import { SubtitleXL, Text1, TitleH1, TitleXL } from "@theme/textStyles";
import alesado from "@img/procedures/alesado.webp";
import fresado from "@img/procedures/fresado.webp";
import reparacion from "@img/procedures/reparacion.webp";
import roscado from "@img/procedures/roscado.webp";
import soldadura from "@img/procedures/soldadura.webp";
import torno from "@img/procedures/torno.webp";

interface Procedure {
  title: string;
  description: string;
  image?: string;
}

const procedures: Procedure[] = [
  {title: "Mecanizado",
  description: "Transformación de materiales mediante remoción precisa para obtener piezas con las dimensiones y acabados requeridos.",
  image: torno,},
  {title: "Reparación",
  description: "Restauración de equipos y componentes industriales para devolverles su funcionalidad óptima.",
  image: reparacion,},
  {title: "Roscado",
  description: "Creación de roscas internas y externas con precisión para asegurar ajustes perfectos.",
  image: roscado,},
  {title: "Soldadura",
  description: "Unión de materiales metálicos mediante diferentes técnicas para garantizar resistencia y durabilidad.",
  image: soldadura,},
  {title: "Alesado",
  description: "Mecanizado de precisión para agujeros cilíndricos con excelente acabado superficial.",
  image: alesado,},
  {title: "Fresado",
  description: "Fabricación de piezas con formas complejas mediante herramientas rotativas de corte.",
  image: fresado,},
]

export const Procedures: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toogleActiveIndex = (index: number) => setActiveIndex(index === activeIndex ? null : index);

  return (
    <Box
      component="section"
      id="procedures"
      sx={{
      paddingX: {xs:"2rem", lg:"3rem", xl:"4rem"},
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "background.paper",
      }}
    >
      <TitleXL id="procedures-title" sx={{ color: "primary.main", marginTop: {xs:"2rem", lg:"3rem", xl:"4rem"}, marginBottom: "1rem" }}>
        Nuestros Procesos
      </TitleXL>
      <SubtitleXL sx={{
        color: "primary.main",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
      Nos especializamos en brindar soluciones industriales de calidad con personal altamente calificado.
      </SubtitleXL>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" },
          gap: {xs: "1rem", sm: "2rem", md: "2rem", lg: "3rem", xl: "4rem"},
          paddingX: {xs: "1rem", sm: "2rem", md: "2rem", lg: "3rem", xl: "4rem"},
          paddingY: {xs: "2rem", lg: "3rem", xl: "4rem"},
        }}
      >
        {procedures.map((procedure, index) => (
          <Box
            id={`procedure-${index}`}
            key={`procedure-${index}`}
            onClick={() => toogleActiveIndex(index)}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "200px",
              gap: "2rem",
              backgroundColor: activeIndex === index ? "rgba(0, 0, 0, 0.5)" : "rgba( 163, 164, 236, 0.25 )",
              backgroundImage: activeIndex === index ? `url(${procedure.image})` : "none",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              overflow: "hidden",
              transition: "background-image 0.5s ease, background-color 0.5s ease",
              color: activeIndex === index ? "background.paper" : "primary.main",
              '&:hover': {
                backgroundImage: `url(${procedure.image})`,
                backgroundColor: "rgba(0, 0, 0, 0.5)", // opcional para oscurecer
                color: "background.paper",
              }
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                backdropFilter: "blur( 1px )",
                WebkitBackdropFilter: "blur( 1px )",
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                paddingX: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                transition: "all 0.5s ease",
              }}
            >
              <TitleH1 sx={{ textAlign: "center", color: "inherit" }}>
                {procedure.title}
              </TitleH1>
              <Text1 sx={{ textAlign: "center", color: "inherit" }}>
                {procedure.description}
              </Text1>
            </Box>
          </Box>

          ))
        }
      </Box>
    </Box>
  );
};