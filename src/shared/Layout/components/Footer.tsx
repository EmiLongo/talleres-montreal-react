import React from "react";
import {
  Box,
  List,
  ListItem,
  Container,
  Link,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import WhatsApp from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import ShareIcon from "@mui/icons-material/Share";
import inpulseLogo from "@img/inpulse_design_logo.svg";
import talleresMontrealLogoByN from "@img/talleres-montreal-logo-simple-ByN.svg";
import { infoItems } from "./Header";
import {
  ParagraphLight,
  Text1,
  Text2,
  Title2,
} from "@/theme/textStyles";

export const contactInfo = [
  { icon: <WhatsApp />, text: "Dpto Técnico: 341-3389977" },
  { icon: <WhatsApp />, text: "Administración: 3476-619576" },
  { icon: <PhoneIcon />, text: "Fijo: 3476-224447" },
  { icon: <EmailIcon />, text: " talleresmontrealsrl@gmail.com" },
  {
    icon: <LocationPinIcon />,
    text: " Av José Márquez 856, San Lorenzo, Santa Fe",
  },
];
export const Footer: React.FC = () => {
  const theme = useTheme();
  const { palette } = theme;
  // Estilos personalizados
  const StyledFooter = styled("footer")({
    backgroundColor: palette.primary[950],
    color: palette.primary.light,
    paddingTop: "2rem",
    paddingBottom: "1rem",
  });

  const FooterList = styled(List)(({ theme }) => ({
  display: "flex",
  listStyleType: "none",
  margin: 0,
  gap: "1.5rem",
  flexWrap: "wrap",
  [theme.breakpoints.up('md')]: {
    gap: "2rem",
  },
  }));

  const FooterListItem = styled(ListItem)(({ theme }) => ({
    flex: 1,
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
                alignItems: "center",
              }}
            >
              <Box
                component={"img"}
                src={talleresMontrealLogoByN}
                alt="Talleres Montreal Blanco y Negro"
                width={120}
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
                <Text1 sx={{ color: palette.primary[100] }}>
                  Compartir página{" "}
                </Text1>
                <ShareIcon
                  width={24}
                  height={24}
                  sx={{ verticalAlign: "middle", marginLeft: 1 }}
                />
              </Box>
            </Box>
          </Box>
            <Box id="footerRight">
              <Title2 sx={{ color: palette.primary[100], textAlign: "center" }}>NUESTRA WEB:</Title2>
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
          <ParagraphLight sx={{ textAlign: "center" }}>
            Derechos reservados © {new Date().getFullYear()}.
          </ParagraphLight>
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
            <ParagraphLight sx={{ textAlign: "center" }}>
              Desarrollado por
            </ParagraphLight>
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
