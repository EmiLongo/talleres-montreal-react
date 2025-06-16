// src/modules/home/components/TrustUs.tsx
import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Carousel } from "./Carousel";
import CartoneraPuertoLogo from "@img/trust-us/cartonera-puerto.png";
import CelulosaArgentinaLogo from "@img/trust-us/celulosa-argentina.png";
import FaiartArgentinaVerbanoLogo from "@img/trust-us/faiart-argentina-verbano.png";
import MaqorLogo from "@img/trust-us/maqor.svg";
import MolinoCaniuelasLogo from "@img/trust-us/molino-caniuelas.png";
import NouryonChemicalsArgentinaLogo from "@img/trust-us/nouryon-chemicals-argentina.svg";
import PeitelLogo from "@img/trust-us/peitel.png";
import RenopackLogo from "@img/trust-us/renopack.png";
import SwiftArgentinaWebpLogo from "@img/trust-us/swift-argentina.webp";
import VartecoQuimicaPuntanaLogo from "@img/trust-us/varteco-quimica-puntana.png";
import VicentinLogo from "@img/trust-us/vicentin.png";
import YeruvaLogo from "@img/trust-us/yeruva.png";
import { SectionSubTitle, SectionTitle } from "./Styled";

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
    title: "Swift Argentina SA",
    isWhite: false,
    url: "https://sitio.swift.com.ar/index.html",
    img: SwiftArgentinaWebpLogo,
  },
];

export const TrustUs: React.FC = () => {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet: boolean = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLaptop: boolean = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  return (
    <Box
      component="section"
      id="trust-us"
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.paper",
        paddingBottom: {xs: "3rem", md:"3rem"},
      }}
    >
      <SectionTitle id="trust-us-title">
        Empresas que Confían en Nosotros
      </SectionTitle>
      <SectionSubTitle sx={{ marginX: 'auto'}}>
        Brindamos servicios a las principales industrias de la región.
      </SectionSubTitle>
      <Carousel logos={clients} speed={isMobile ? 100 : isTablet ? 80 : isLaptop ? 70 : 60} />
      <Box component={"span"} id="whatwedo" />
    </Box>
  );
};
