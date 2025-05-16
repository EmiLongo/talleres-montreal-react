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
import logoText from '@img/talleres-montreal.svg';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Text1, Text2 } from '@theme/textStyles';

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
  
  const infoItems = [
    // { text: 'Inicio', path: '#home' },
    { text: 'Servicios', path: '#services' },
    { text: 'Quiénes Somos', path: '#about-us' },
    { text: 'Equipamiento', path: '#equipment' },
    { text: 'Clientes', path: '#trust-us' },
    { text: 'Contacto', path: '#contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', position: 'relative' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: "3rem", mb: "2rem" }}>
        <img src={logoText} alt="Logo Talleres Montreal" height="60px" />
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
            <Text1 sx={{ fontSize: '1.2rem', color: palette.text.primary}}>{item.text}</Text1>
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ height: "70px" }}/>
      <AppBar position="fixed" color="default" elevation={1} sx={{ height: "70px" }}>
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
                  src={logoText}
                  alt="Logo Talleres Montreal"
                  height="60px"
                  />
                </Box>
              </>
            ) : (
              // versión escritorio
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingX: { xs: '1rem', lg: '3rem'} }}>
                <Box 
                  component={"img"}
                  src={logoText}
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
                      <Text2 sx={{
                        fontWeight: 500,
                        color: 'text.primary',
                        '&:hover': {
                          color: palette.primary[600],
                        },

                      }}>{item.text}</Text2>
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