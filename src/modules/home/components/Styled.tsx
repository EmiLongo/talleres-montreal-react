import { SubtitleXL, TitleXL } from "@/theme/textStyles";
import React from "react";

interface Props {
  children: React.ReactNode
  sx?: object
  id?: string
}
export const SectionTitle: React.FC<Props> = ({ children, sx, id }) => {
  return (
    <TitleXL
      id={id}
      sx={{
        marginTop: {xs:"3rem", lg:"3rem"},
        marginBottom: "1rem",
        textAlign: "center",
      ...sx }}>
      { children }
    </TitleXL>
  )
};

export const SectionSubTitle: React.FC<Props> = ({ children, sx, id }) => {
  return (
    <SubtitleXL
    id={id}
    sx={{
      textAlign: "center", 
      marginBottom: "2rem",
      paddingX: {xs: "2rem", md: "unset"}, 
      maxWidth: {xs: "unset", md: "600px"}, 
      textWrap: "balance",
      ...sx}}
    >
      { children }
    </SubtitleXL>
  )
}