// src/shared/Layout/page/Layout.tsx
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import React from "react";
import { Box } from "@mui/material";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Box 
      component={"main"}
      sx={{ flexGrow: 1 }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};