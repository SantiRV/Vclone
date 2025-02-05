import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { Auth } from "./Auth"; // Asegúrate de importar el componente de Auth

export const NavBar = () => {
  const [openAuth, setOpenAuth] = useState(false); // Estado para controlar si el formulario Auth está visible

  const handleOpenAuth = () => {
    setOpenAuth(true);
  };

  const handleCloseAuth = () => {
    setOpenAuth(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mi Aplicación
        </Typography>
        <Button color="inherit" onClick={handleOpenAuth}>
          Login/Register
        </Button>
      </Toolbar>

      
      <Dialog open={openAuth} onClose={handleCloseAuth}>
        <DialogContent>
          <Auth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAuth} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};
