// components/Header.js
import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';
import logoText from '@img/talleres-montreal.svg';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { P } from '../../../theme/textStyles';

// Importar contexto del carrito (deberás crearlo)
// import { useCart } from '../contexts/CartContext';

export const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  // const { cartItems } = useCart();
  // Asume que tienes un contexto para el carrito
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  // const menuItems = [

  // ];
  
  const infoItems = [
    { text: 'Inicio', path: '#home' },
    { text: 'Servicios', path: '#services' },
    { text: 'Quiénes Somos', path: '#about-us' },
    { text: 'Equipamiento', path: '#equipment' },
    { text: 'Clientes', path: '#trust-us' },
    { text: 'Contacto', path: '#contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', position: 'relative' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: "3rem", mb: 2 }}>
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
      <List>
        <ListItem component={RouterLink} to="/">
          <ListItemText primary="Home / Productos" /><P>Home / Productos</P>
        </ListItem>
        {/* {menuItems.map((item) => (
          <ListItem key={item.text} component={RouterLink} to={item.path} sx={{ pl: 4 }}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))} */}
        {infoItems.map((item) => (
          <ListItem key={item.text} component={RouterLink} to={item.path}>
            <P>{item.text}</P>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="default" elevation={1} sx={{ backgroundColor:"background.paper" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
                  <RouterLink to="/" style={{ paddingTop: 'auto', paddingBottom: 'auto' }}>
                    <img src={logoText} alt="Logo Talleres Montreal" height="60" />
                  </RouterLink>
                </Box>
              </>
            ) : (
              // versión escritorio
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingX: { xs: '1rem', lg: '3rem'} }}>
                <RouterLink to="/" style={{ paddingTop: 'auto', paddingBottom: 'auto'  }}>
                  <img src={logoText} alt="Logo Talleres Montreal" height="60" />
                </RouterLink>
                {/* <Box sx={{ flexGrow: 1, display: 'flex' }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item.text}
                      component={RouterLink}
                      to={item.path}
                      sx={{ color: 'text.primary', mx: 1 }}
                    >
                      {item.text}
                    </Button>
                  ))}
                </Box> */}
                <Box sx={{ display: 'flex' }}>
                  {infoItems.map((item) => (
                    <Button
                      key={item.text}
                      component={RouterLink}
                      to={item.path}
                      sx={{ mx: 1 }}
                    >
                      <P sx={{ color: 'text.primary'}}>{item.text}</P>
                    </Button>
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
        Venta de Extracción Hongos Adaptógenos, Melena de León, Cordyceps Militaris, Reishi, Cola de Pavo, Màxima Pureza
      </Typography>
    </>
  );
};