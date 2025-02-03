import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export const NavBar = () => {
    return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Mi Aplicación
            </Typography>
            <Button color="inherit">Iniciar sesión</Button>
          </Toolbar>
        </AppBar>
      );
}