import React from "react";
import {
  Box,
  List,
  ListItem,
  Container,
  Link,
  useTheme,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import WhatsApp from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import ShareIcon from "@mui/icons-material/Share";
import inpulseLogo from "@img/inpulse_design_logo_blanco.svg";
import talleresMontrealLogoContraste from "@img/talleres-montreal-logo-horizontal-contraste.svg";
import { infoItems } from "./Header";
import {
  Text2,
  Title2,
} from "@/theme/textStyles";

export const contactInfo = [
  { icon: <WhatsApp sx={{ fontSize: "2rem" }}/>, title: "Dpto Técnico:", text: "341-3389977", type: "phone" },
  { icon: <WhatsApp sx={{ fontSize: "2rem" }}/>, title: "Administración:", text: "3476-619576", type: "phone" },
  { icon: <PhoneIcon sx={{ fontSize: "2rem" }}/>, title: "Teléfono Fijo:", text: "3476-224447", type: "phone" },
  { icon: <EmailIcon sx={{ fontSize: "2rem" }}/>, title: "", text: " talleresmontrealsrl@gmail.com", type: "email" },
  {
    icon: <LocationPinIcon sx={{ fontSize: "2rem" }}/>,
    title: "",
    text: " Av José Márquez 856, San Lorenzo, Santa Fe",
    type: "address",
  },
];
export const Footer: React.FC = () => {
  const theme = useTheme();
  const { palette } = theme;
  // Estilos personalizados
  const StyledFooter = styled("footer")({
    backgroundColor: palette.primary[800],
    color: palette.primary.light,
    paddingTop: "2rem",
    paddingBottom: "1rem",
  });

  const FooterList = styled(List)(({ theme }) => ({
  display: "flex",
  listStyleType: "none",
  margin: 0,
  padding: 0,
  gap: "1.5rem",
  flexWrap: "wrap",
  [theme.breakpoints.up('md')]: {
    gap: "2rem",
  },
  }));

  const FooterListItem = styled(ListItem)(({ theme }) => ({
    flex: 1,
      margin: 0,
    paddingRight: "0.5rem",
    [theme.breakpoints.up('md')]: {
      paddingRight: "1rem",
    },
  }));

  const FooterLink = styled(Link)({
    textDecoration: "none",
    color: palette.primary.light,
    "&:hover": {
      color: palette.primary[400],
    },
  });

  // Función para compartir URL
  const shareURL = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Talleres Montreal",
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("¡URL copiada al portapapeles!"))
        .catch(() => alert("No se pudo copiar la URL"));
    }
  };

  return (
    <StyledFooter id="footer">
      <Container maxWidth="lg"
      >
        <Box
          id="footerContainer"
          sx={{
            display: "flex",
            justifyContent: {xs: "center", md: "space-between"},
            flexWrap: "wrap",
            gap: { xs: 4 },
          }}
        >
          {/* <Box
            id="footerLeft"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Title2
              sx={{ color: palette.primary[100], textTransform: "uppercase" }}
            >
              Información de Contacto
            </Title2>
            <Box
              sx={{ mb: 2, display: "flex", flexDirection: "column", gap: 1 }}
            >
              {contactInfo.map((item, index) => (
                <Text2
                  key={index}
                  sx={{
                    color: palette.primary[100],
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {item.icon}
                  {item.text}
                </Text2>
              ))}
            </Box>
          </Box> */}
          

          <Box
            id="footerLeft"
            sx={{
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box
                component={"img"}
                src={talleresMontrealLogoContraste}
                alt="Talleres Montreal Blanco y Negro"
                height={70}
              />
              <Box
                id="shareURL"
                onClick={shareURL}
                sx={{
                  cursor: "pointer",
                  userSelect: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ShareIcon
                  width={24}
                  height={24}
                  sx={{ verticalAlign: "middle", marginRight: 1 }}
                />
                <Text2 sx={{ color: palette.primary[100], fontWeight: 400 }}>
                  Compartir página
                </Text2>
              </Box>
            </Box>
          </Box>
            <Box id="footerRight" sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <Title2 sx={{ color: palette.primary[100], textAlign: "center", textTransform: "none" }}>Nuestra Web:</Title2>
              <Box>
                <FooterList>
                  <FooterListItem id="footerListItem-home">
                    <FooterLink href="#home">
                      <Text2 sx={{ color: "inherit" }}>Home</Text2>
                    </FooterLink>
                  </FooterListItem>
                  {infoItems.map((item) => (
                    <FooterListItem
                      key={item.text}
                      id={`footerListItem-${item.text}`}
                    >
                      <FooterLink href={item.path}>
                        <Text2 sx={{ color: "inherit" }}>{item.text}</Text2>
                      </FooterLink>
                    </FooterListItem>
                  ))}
                </FooterList>
              </Box>
            </Box>
        </Box>
        <Divider
        component="hr"
        variant="fullWidth"
        aria-hidden="true"
        sx={{ 
          marginTop: "2rem", 
          marginBottom: "1rem", 
          backgroundColor: palette.primary[100] 
        }} 
        />
        <Box
          id="footerBottom"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "2rem",
          }}
        >
          <Text2 sx={{ color: "inherit",textAlign: "center" }}>
            Derechos reservados © {new Date().getFullYear()}.
          </Text2>
          <Box
            component={"a"}
            href="https://inpulse.design"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <Text2 sx={{ color: "inherit",textAlign: "center" }}>
              Desarrollado por
            </Text2>
            <Box
              component={"img"}
              src={inpulseLogo}
              alt="Logo Inpulse Design"
              width={100}
            />
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  );
};
