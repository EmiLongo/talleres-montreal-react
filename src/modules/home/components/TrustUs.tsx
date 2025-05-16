// src/modules/home/components/TrustUs.tsx
import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { P, TitleXL } from "@theme/textStyles";
import { Carousel } from "./Carousel";
import CartoneraPuertoLogo from "@img/trust-us/cartonera-puerto.png";
import CelulosaArgentinaLogo from "@img/trust-us/celulosa-argentina.png";
import FaiartArgentinaVerbanoLogo from "@img/trust-us/faiart-argentina-verbano.png";
import MaqorLogo from "@img/trust-us/maqor.jpg";
import MolinoCaniuelasLogo from "@img/trust-us/molino-caniuelas.png";
import NouryonChemicalsArgentinaLogo from "@img/trust-us/nouryon-chemicals-argentina.svg";
import PeitelLogo from "@img/trust-us/peitel.png";
import RenopackLogo from "@img/trust-us/renopack.png";
import RespatLogo from "@img/trust-us/respat.png";
import SwiftArgentinaWebpLogo from "@img/trust-us/swift-argentina.webp";
import VartecoQuimicaPuntanaLogo from "@img/trust-us/varteco-quimica-puntana.png";
import VicentinLogo from "@img/trust-us/vicentin.jpg";
import YeruvaLogo from "@img/trust-us/yeruva.png";

const clients = [
  {
    title: "Molino Cañuelas SACIFIA",
    isWhite: false,
    url: "https://www.molinocanuelas.com/es",
    img: MolinoCaniuelasLogo,
  },
  {
    title: "Peitel S.A.",
    isWhite: false,
    url: "https://www.peitel.com.ar/",
    img: PeitelLogo,
  },
  {
    title: "Maqor SRL",
    isWhite: false,
    url: "https://maqor.com.ar/",
    img: MaqorLogo,
  },
  {
    title: "Nouryon Chemicals Argentina SAU",
    isWhite: false,
    url: "https://www.nouryon.com/",
    img: NouryonChemicalsArgentinaLogo,
  },
  {
    title: "Celulosa Argentina SA",
    isWhite: false,
    url: "http://www.celulosaargentina.com.ar/",
    img: CelulosaArgentinaLogo,
  },
  {
    title: "Faiart Argentina SA",
    isWhite: false,
    url: "https://www.verbano.com.ar/index-2.html",
    img: FaiartArgentinaVerbanoLogo,
  },
  {
    title: "Cartonera Puerto SA",
    isWhite: false,
    url: "https://www.cartonerapuerto.com.ar/",
    img: CartoneraPuertoLogo,
  },
  {
    title: "Varteco Química Puntana S.A.",
    isWhite: false,
    url: "https://www.varteco.com.ar/",
    img: VartecoQuimicaPuntanaLogo,
  },
  {
    title: "Vicentin S.A.I.C.",
    isWhite: false,
    url: "https://www.vicentin.com.ar/",
    img: VicentinLogo,
  },
  {
    title: "Renopack SA",
    isWhite: false,
    url: "https://www.linkedin.com/company/renopack-sa/",
    img: RenopackLogo,
  },
  {
    title: "Yeruvá SA",
    isWhite: false,
    url: "https://www.yeruva.com.ar/",
    img: YeruvaLogo,
  },
  {
    title: "Respat SRL",
    isWhite: true,
    url: "https://www.soldadurasrespat.com.ar/",
    img: RespatLogo,
  },
  {
    title: "Swift Argentina SA",
    isWhite: false,
    url: "https://sitio.swift.com.ar/index.html",
    img: SwiftArgentinaWebpLogo,
  },
];

export const TrustUs: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  

  return (
    <Box
      component="section"
      id="trust-us-container"
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.paper",
        marginBottom: "4rem",
      }}
    >
      <TitleXL
        id="trust-us"
        sx={{
          color: "primary.main",
          marginTop: { xs: "2rem", lg: "3rem", xl: "4rem" },
          marginBottom: "1rem",
        }}
      >
        Empresas que Confían en Nosotros
      </TitleXL>
      <P
        sx={{
          fontSize: {
            xl: "1.5rem",
            lg: "1.375rem",
            md: "1.25rem",
            sm: "1.2rem",
            xs: "1.2rem",
          },
          color: "primary.main",
          maxWidth: "1100px",
          marginX: "auto",
          marginBottom: "2rem",
        }}
      >
        Brindamos servicios a las principales industrias de la región.
      </P>
      <Carousel logos={clients} speed={isMobile ? 600 : isTablet ? 350 : 120} />
    </Box>
  );
};
