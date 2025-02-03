import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Azul Material UI
    },
    secondary: {
      main: "#dc004e", // Rojo Material UI
    },
    background: {
      default: "#f5f5f5", // Fondo gris claro
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
