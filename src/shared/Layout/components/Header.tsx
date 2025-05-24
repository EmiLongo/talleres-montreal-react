// components/Header.js
import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';
import logoTextHorizontal from '@img/talleres-montreal-logo-horizontal.svg';
import logoTextVertical from '@img/talleres-montreal-logo-vertical.svg';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Title1 } from '@theme/textStyles';

export const infoItems = [
  // { text: 'Inicio', path: '#home' },
  { text: 'Servicios', path: '#services' },
  { text: 'Procesos', path: '#procedures' },
  { text: 'Equipamiento', path: '#equipment' },
  { text: 'Contacto', path: '#contact' },
];

export const Header: React.FC = () => {
  const theme = useTheme();
  const { palette } = theme;
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  // const { cartItems } = useCart();
  // Asume que tienes un contexto para el carrito
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', position: 'relative' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: "3rem", mb: "2rem" }}>
        <Box component={"img"} src={logoTextVertical} alt="Logo Talleres Montreal" height="100px" />
      </Box>
      <Box
        sx={{ position: 'absolute', top: "1rem", right: "1rem" }}
        onClick={handleDrawerToggle}
      >
        <CloseIcon />
      </Box>
      <Box
        sx={{ position: 'absolute', top: "1rem", left: "1rem" }}
        onClick={handleDrawerToggle}
      />
      <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        {infoItems.map((item) => (
          <Box key={item.text} component={"a"} href={item.path}>
            <Title1 sx={{ fontSize: '1.2rem', color: palette.text.primary, textTransform: 'none', }}>{item.text}</Title1>
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* <Box sx={{ height: "70px" }} id="home"/> */}
      <AppBar 
      id="home"
      position="fixed" 
      color="default" 
      elevation={1} 
      sx={{
        height: "70px",
        backgroundColor: "#f3f6fc82",
        backdropFilter: "blur(10px) saturate(180%)",
        WebkitBackdropFilter: "blur(10px) saturate(180%)",

      }}
      >
        <Container maxWidth="xl" sx={{ height: '100%' }}>
          <Toolbar disableGutters sx={{ height: '100%' }}>
            {isMobile ? (
              // versión móvil
              <>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Box 
                  component={"img"}
                  src={logoTextHorizontal}
                  alt="Logo Talleres Montreal"
                  height="60px"
                  />
                </Box>
              </>
            ) : (
              // versión escritorio
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingX: { xs: '1rem', sm: '3rem', md: '4rem', lg: '5rem', xl: 'unset'} }}>
                <Box 
                  component={"img"}
                  src={logoTextHorizontal}
                  alt="Logo Talleres Montreal"
                  height="60px"
                />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: {xs: '3rem', lg: '4rem', xl: '5rem'} }}>
                  {infoItems.map((item) => (
                    <Box
                      key={item.text}
                      component={"a"}
                      href={item.path}
                    >
                      <Title1 sx={{
                        fontWeight: 500,
                        color: 'text.primary',
                        '&:hover': {
                          color: palette.primary[600],
                        },
                        textTransform: 'none',
                      }}>{item.text}</Title1>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        {/* Menú lateral en versión móvil */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Mejor rendimiento en móviles
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* titulo para el SEO, no se muestra */}
      <Typography 
        variant="h1" 
        component="h1" 
        sx={{ 
          fontSize: '0.5rem',
          position: 'absolute',
          top: '-100%',
          left: '-100%',
        }}
      >
        Fabricación y reparación de piezas y equipos para la industria, según planos, muestras o ingeniería propia. Calidad y precisión garantizada.
      </Typography>
    </>
  );
};