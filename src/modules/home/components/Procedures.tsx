// src/modules/home/components/Procedures.tsx
import { Box } from "@mui/material";
import React from "react";
import alesado from "@img/procedures/alesado.webp";
import fresado from "@img/procedures/fresado.webp";
// import reparacion from "@img/procedures/reparacion.webp";
import roscado from "@img/procedures/roscado.webp";
import soldadura from "@img/procedures/soldadura.webp";
import torno from "@img/procedures/torno.webp";
import fundicion from "@img/procedures/fundicion.webp";
import { SectionSubTitle, SectionTitle } from "./Styled";
import HorizontalAccordion from "./HorizontalAccordion";

interface Procedure {
  id: string;
  title: string;
  description: string;
  image?: string;
}

const procedures: Procedure[] = [
  {id: "1",
  title: "Torneado",
  description: "Contamos con Tornos Paralelos para piezas de gran diámetro ( hasta 1070mm) y longitud (4060mm).",
  image: torno,},
  {id: "2",
  title: "Roscado",
  description: "Creamos roscas internas y externas con precisión para asegurar ajustes perfectos.",
  image: roscado,},
  {id: "3",
  title: "Soldado",
  description: "Unimos materiales metálicos mediante diferentes técnicas para garantizar resistencia y durabilidad.",
  image: soldadura,},
  {id: "4",
  title: "Alesado",
  description: "Realizamos mecanizados de precisión para agujeros cilíndricos con excelente acabado superficial.",
  image: alesado,},
  {id: "5",
  title: "Fresado",
  description: "Fabricamos piezas con formas complejas mediante herramientas rotativas de corte.",
  image: fresado,},
  {id: "6",
  title: "Fundición",
  description: "Fabricamos piezas de fundición en diferentes aceros con modelos en madera o Telgopor.",
  image: fundicion,
  },
]

export const Procedures: React.FC = () => {

  return (
    <Box
      component="section"
      sx={{
      paddingX: {xs: "2rem", lg: "unset"},
      paddingBottom: {xs:"2rem", lg:"4rem", xl:"5rem"},
      marginX: "auto",
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "background.paper",
      }}
    >
      <SectionTitle id="procedures-title">
        Nuestros Servicios
      </SectionTitle>
      <SectionSubTitle sx={{ marginBottom: {xs: "2rem", lg: "3rem", xl: "4rem" }}}>
      Fabricamos todo tipo de piezas con formas irregulares y detalles complejos.
      </SectionSubTitle>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "2rem", justifyContent: "center", maxWidth: "1280px",}}>
        <HorizontalAccordion panels={procedures} />

      </Box>
      <Box component={"span"} id="equipment" />
    </Box>
  );
};