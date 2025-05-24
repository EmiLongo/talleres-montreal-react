// src/modules/home/components/Procedures.tsx
import { Box } from "@mui/material";
import React, { useState } from "react";
import { Text1, Title1 } from "@theme/textStyles";
import alesado from "@img/procedures/alesado.webp";
import fresado from "@img/procedures/fresado.webp";
// import reparacion from "@img/procedures/reparacion.webp";
import roscado from "@img/procedures/roscado.webp";
import soldadura from "@img/procedures/soldadura.webp";
import torno from "@img/procedures/torno.webp";
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
  description: "Transformación de materiales mediante remoción precisa para obtener piezas con las dimensiones y acabados requeridos.",
  image: torno,},
  // {title: "Reparación",
  // description: "Restauración de equipos y componentes industriales para devolverles su funcionalidad óptima.",
  // image: reparacion,},
  {id: "2",
  title: "Roscado",
  description: "Creación de roscas internas y externas con precisión para asegurar ajustes perfectos.",
  image: roscado,},
  {id: "3",
  title: "Soldadura",
  description: "Unión de materiales metálicos mediante diferentes técnicas para garantizar resistencia y durabilidad.",
  image: soldadura,},
  {id: "4",
  title: "Alesado",
  description: "Mecanizado de precisión para agujeros cilíndricos con excelente acabado superficial.",
  image: alesado,},
  {id: "5",
  title: "Fresado",
  description: "Fabricación de piezas con formas complejas mediante herramientas rotativas de corte.",
  image: fresado,},
]

export const Procedures: React.FC = () => {
  // const theme = useTheme();
  // const { palette } = theme;
  const [expanded, setExpanded] = useState<string | null>(procedures[0].id || null);
  const handleExpanse = (id: string) => {
    setExpanded(id);
  };

  return (
    <Box
      component="section"
      id="procedures"
      sx={{
      paddingX: {xs:"2rem", sm: "unset"},
      paddingY: {xs:"2rem", lg:"4rem", xl:"5rem"},
      marginX: "auto",
      position: "relative",
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "background.paper",
      }}
    >
      <SectionTitle id="procedures-title">
        Nuestros Procesos
      </SectionTitle>
      <SectionSubTitle sx={{ marginBottom: {xs: "2rem", lg: "3rem", xl: "4rem" }}}>
      Nos especializamos en brindar soluciones industriales de calidad con personal altamente calificado.
      </SectionSubTitle>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "2rem"}}>
        <HorizontalAccordion panels={procedures} expanded={expanded} setExpanded={handleExpanse} />
        <Box sx={{ width: {xs:"100%", sm:"30%"}, display: "flex", flexDirection: "column", justifyContent: "center"}}>
          {expanded && <>
          <Title1 sx={{ mb: "1rem", textWrap: "wrap", textTransform: "capitalize",}}>
            {procedures.find(procedure => procedure.id === expanded)?.title}
          </Title1>
          <Text1 sx={{ textWrap: "wrap" }}>
            {procedures.find(procedure => procedure.id === expanded)?.description}
          </Text1>
          </>}
        </Box>
      </Box>
    </Box>
  );
};