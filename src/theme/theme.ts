// src/theme.ts
import { createTheme, Theme } from "@mui/material";

// hechas con https://m2.material.io/inline-tools/color/
// el que dice elegido determinó la paleta
export const grayColor = {
  // contraste con texto negro
  50: "#F3DFB4",
  100: "#E8E8E8",
  200: "#D9D9D9",
  300: "#C9C9C9",
  400: "#B5B5B5",
  500: "#9E9E9E",
  // a partir de aca contraste con texto blanco
  600: "#8A8A8A",
  700: "#747474",
  800: "#5C5C5C",
  850: "#494949",
  900: "#323232",
  950: "#080808",
};

export const primaryColor = {
  // contraste con texto negro
  50: "#f3f6fc",
  100: "#e5edf9",
  200: "#c6d9f1",
  300: "#93b9e6",
  400: "#5995d7",
  500: "#3478c3",
  600: "#245da5",
  700: "#1e4b86",
  800: "#1d406f",
  900: "#1d375d",
  950: "#13243e",
  // a partir de aca contraste con texto blanco
  // elegido
};

export const secondaryColor = {
	// contraste con texto negro
	50: "#e6f2ec",
	100: "#c4dfcf",
	200: "#a2cab2",
	300: "#84b597",
	400: "#73a585",
	// a partir de aca contraste con texto blanco
	500: "#689575",
	600: "#60886b",
	700: "#57785e",  // elegido
	800: "#4e6853",
	900: "#3e4c3e",
};

export const accentColor = {
	// contraste con texto negro
  50: "#faf3e1",
  100: "#f3dfb4", // elegido
  200: "#edca80",
  300: "#e8b54a",
  400: "#e4a61c",
  500: "#e29700",
	// a partir de aca contraste con texto blanco
  600: "#df8c00",
  700: "#da7d00",
  800: "#d56e00",
  900: "#cc5600",
};

export const errorColor = {
	// contraste con texto negro
  50: "#ffeaed",
  100: "#ffcace",
  200: "#f19593",
  300: "#e86b69",
  400: "#f14643",
	// a partir de aca contraste con texto blanco
  500: "#f53224",
  600: "#e62525", // elegido
  700: "#d41720",
  800: "#c80a18",
  900: "#b90008",
};

export const customFonts = {
  letter: {
    wide: 1.3,
    normal: 0.3,
  },
  family: {
    oswald: "Alata, impact, arial, calibri, sans-serif",
    catamaran: "Hind Madurai, open-sans, arial, calibri, sans-serif",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor[900],
      light: primaryColor[200],
      ...primaryColor,
    },
    secondary: {
      main: secondaryColor[700], // Color verde para el texto "Disponibilidad"
      light: secondaryColor[200],
      ...secondaryColor,
    },
    background: {
      // default: "#18222986",
      paper: "#f8f8ff",
    },
    text: {
      primary: primaryColor[950],
      secondary: grayColor[950],
      disabled: grayColor[400],
    },
    error: {
      main: errorColor[600],
      light: errorColor[200],
      ...errorColor,
    },
    grey: {
      ...grayColor,
    },
  },
  typography: {
    htmlFontSize: 16, // base 1rem = 16px
  },
  components: {
    MuiButton: {
      defaultProps: {
        // Establece el estilo predeterminado del botón
        variant: "contained",
        size: "small",
      },
      styleOverrides: {
        // sobreescribe estilos de botones
        root: {
          minHeight: '30px',
          borderRadius: '8px',
          // padding: ".5rem .7rem",
          letterSpacing: customFonts.letter.wide,
          width: "fit-content",
          fontFamily: customFonts.family.catamaran,
          fontWeight: 500,
          textTransform: "uppercase",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: customFonts.family.catamaran,
          color: grayColor[950],
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: grayColor[600], // Color del borde
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: grayColor[700], // Color del borde al hacer hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: grayColor[800], // Color del borde cuando está enfocado
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: customFonts.family.catamaran,
          color: grayColor[800],
          "&.Mui-focused": {
            color: grayColor[800],
          },
          "&.MuiInputLabel-shrink": {
            color: grayColor[800],
          },
          "&.MuiFormLabel-filled": {
            color: grayColor[800],
          },
        },
      },
    },
  }
});



export const defaultParagraph = (theme: Theme) => ({
  fontFamily: customFonts.family.catamaran,
  fontWeight: "normal",
  letterSpacing: customFonts.letter.normal,
  color: theme.palette.text.secondary,
});

export const defaultCTA = (theme: Theme) => ({
  fontFamily: customFonts.family.catamaran,
  fontWeight: "normal",
  letterSpacing: customFonts.letter.wide,
  color: theme.palette.text.secondary,
});

export const defaultTitle = (theme: Theme) => ({
  fontFamily: customFonts.family.oswald,
  letterSpacing: customFonts.letter.normal,
  fontWeight: 500,
  color: theme.palette.text.secondary,
});

export const inputAdvice = (theme: Theme) => ({
  fontFamily: customFonts.family.catamaran,
  fontSize: "0.75rem", // 12px
  color: theme.palette.background.paper,
});