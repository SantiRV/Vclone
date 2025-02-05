import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Box, TextField, Button, Typography } from "@mui/material";

export const Auth = () => {
    const { user, register, login, logout } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistrer = async () => {
        try {
        await register(email, password);
        alert('User registered successfully!')
    } catch (error) {
        console.error(error);
        alert("Error registering user")
    }};

    const handleLogIn = async () => {
        try {
            await login(email, password);
            alert("User logged in!");
        } catch (error) {
            console.error(error)
            alert("Invalid credentials");
        }
    };

    const handleLogout = async () => {
        await logout();
      };

      return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, margin: "auto", mt: 5 }}>
            <Typography variant="h4">{user ? 'Welcome' : 'Login / Register'}</Typography>
            {user ? (
        <>
          <Typography variant="h6">Logged in as: {user.email}</Typography>
          <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <>
          <TextField label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button variant="contained" color="primary" onClick={handleLogIn}>Login</Button>
          <Button variant="contained" color="success" onClick={handleRegistrer}>Register</Button>
        </>
      )}
        </Box>
      )
}