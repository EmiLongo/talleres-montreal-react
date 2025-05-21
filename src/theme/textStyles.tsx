// src/theme/textStyles.tsx
import { styled, Typography, TypographyProps } from '@mui/material';
import { defaultCTA, defaultParagraph, defaultTitle, inputAdvice } from './theme';

// Helper para recibir sx extra

const responsiveFontSize = (fontSizes: { xl?: string; lg?: string; md?: string; sm?: string, xs?: string }) => (theme: any) => ({
  fontSize: fontSizes.xl,
  [theme.breakpoints.down('xl')]: { fontSize: fontSizes.lg },
  [theme.breakpoints.down('lg')]: { fontSize: fontSizes.md },
  [theme.breakpoints.down('md')]: { fontSize: fontSizes.sm },
  [theme.breakpoints.down('sm')]: { fontSize: fontSizes.xs },
});

// TITLES
export const TitleXL = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultTitle(theme),
  ...responsiveFontSize({ xl: '2.25rem', lg: '2rem', md: '1.75rem', sm: '1.75rem', xs: '1.75rem' })(theme), // 36px
}));

export const Title1 = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultTitle(theme),
  ...responsiveFontSize({ xl: '1.5rem', lg: '1.375rem', md: '1.25rem', sm: '1.125rem', xs: '1rem' })(theme), // 24px
  textWrap: "wrap",
}));

export const Title2 = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultTitle(theme),
  ...responsiveFontSize({ xl: '1.25rem', lg: '1.125rem', md: '1.05rem', sm: '1rem', xs: '1rem' })(theme), // 20px
  textWrap: "wrap",
}));

export const Title3 = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultTitle(theme),
  ...responsiveFontSize({ xl: '1rem', lg: '0.9375rem', md: '0.875rem', sm: '0.8125rem', xs: '0.75rem' })(theme), // 16px
  fontWeight: 'normal',
  textWrap: "wrap",
}));

// CTA
export const CallToAction = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultCTA(theme),
  ...responsiveFontSize({ xl: '1.25rem', lg: '1.125rem', md: '1rem', sm: '0.875rem', xs: '0.75rem' })(theme), // 20px
  fontWeight: 600,
  textTransform: "uppercase",
}));
// SUBTITLES
export const SubtitleBold = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(theme),
  fontWeight: 600,
  ...responsiveFontSize({ xl: '0.875rem', lg: '0.8125rem', md: '0.75rem', sm: '0.6875rem', xs: '0.625rem' })(theme), // 14px
}));

export const SubtitleXL = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(theme),
  ...responsiveFontSize({ xl: "1.5rem", lg: "1.375rem", md: "1.25rem", sm: "1.2rem", xs: "1.2rem"})(theme), // 18px
  textWrap: "wrap",
}));

export const Subtitle = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(theme),
  ...responsiveFontSize({ xl: '0.875rem', lg: '0.8125rem', md: '0.75rem', sm: '0.6875rem', xs: '0.625rem' })(theme), // 14px
  textWrap: "wrap",
}));

// BUTTON MINI
export const ButtonMini = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(theme),
  textTransform: "uppercase",
  color: theme.palette.secondary.main,
  ...responsiveFontSize({ xl: '0.687rem', lg: '0.625rem', md: '0.5625rem', sm: '0.5rem' })(theme), // 10px
}));

// PARAGRAPHS
export const Text1 = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(theme),
  ...responsiveFontSize({ xs: '1.1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem' })(theme),
  textWrap: "wrap",
}));

export const Text2 = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(theme),
  ...responsiveFontSize({ xs: '0.8rem', md: '1rem', lg: '1.1rem', xl: '1.2rem' })(theme),
  textWrap: "wrap",
}));

export const ParagraphLight = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(theme),
  color: theme.palette.background.paper,
  textWrap: "wrap",
}));

export const ParagraphDetails = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(theme),
  fontSize: "0.625rem", // 10px
  textWrap: "wrap",
}));

export const TextBoxFill = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(theme),
  fontSize: "0.875rem", // 14px
}));

export const TextBox = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...defaultParagraph(theme),
  fontSize: "0.812rem", // 13px
}));

// INPUTS
export const InputAdvice = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...inputAdvice(theme),
}));

export const InputError = styled((props: TypographyProps) => <Typography {...props} />)(({ theme }) => ({
  ...inputAdvice(theme),
  color: theme.palette.error.main,
}));
