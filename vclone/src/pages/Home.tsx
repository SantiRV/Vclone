import { Button, Container, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        ¡Bienvenido a la App con Material UI! 🚀
      </Typography>
      <Button variant="contained" color="primary">
        ¡Haz clic aquí!
      </Button>
    </Container>
  );
}

