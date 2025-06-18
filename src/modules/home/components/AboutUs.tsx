import { Box, useTheme } from '@mui/material'
import React from 'react'
import { SectionSubTitle, SectionTitle } from './Styled'
import { Text1, TitleXL } from '@/theme/textStyles'

const infoAboutUs = [{
  title: "+30",
  subtitle: "Años",
  isSubtBig: false,
},
{
  title: "+200",
  subtitle: "Clientes",
  isSubtBig: false,
},
{
  title: "+15.000",
  subtitle: "Proyectos",
  isSubtBig: false,
}]
export const AboutUs: React.FC = () => {
  const { palette } = useTheme();
  return (
    <Box component="section"
    id='about-us-container'
    sx={{
      paddingY: "3rem",
      backgroundColor: palette.primary[100],
    }}
    >
      <Box sx={{
        maxWidth: "min(1280px, 95%)",
        marginX: "auto",
      }}>
        <SectionTitle id="about-us-title" sx={{marginTop: 0}}>
          ¿QUIÉNES SOMOS?
        </SectionTitle>
        <SectionSubTitle sx={{ marginX: 'auto'}}>
          En Talleres Montreal SRL somos una empresa con más de 30 años de trayectoria y un fuerte compromiso con la calidad para brindar soluciones precisas y confiables a las principales industrias de la región.
        </SectionSubTitle>
        <Box sx={{
          display: "flex",
          flexDirection: {xs: 'column', md: 'row'},
          justifyContent: {xs: "unset", md:"space-around"},
          alignItems: {xs: "center", md: "unset"},
          gap:{xs: "3rem", md: 0}
        }}>
          {infoAboutUs.map(item => (
            <Box key={`aboutUs-${item.subtitle}`}>
            <TitleXL sx={{textTransform: "none", transform: "scale(1.7)", textAlign: "center", color: palette.primary[600], marginBottom: ".5rem"}}>{item.title}</TitleXL>
            {item.isSubtBig
            ? <TitleXL sx={{textTransform: "none", transform: "scale(1.7)", marginTop: ".5rem", textAlign: "right"}}>{item.subtitle}</TitleXL>
            : <Text1 sx={{textTransform: "none", transform: "scale(1.4)", textAlign: "center", fontWeight: 400}}>{item.subtitle}</Text1>
            }
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}