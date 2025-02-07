import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Box, TextField, Button, Typography, Select, MenuItem } from "@mui/material";

export const Auth = () => {
  const { user, register, login, logout, role } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<"Admin" | "User">("User");

  const handleRegister = async () => {
    try {
      await register(email, password, selectedRole); // Registramos con el rol
      alert("User registered successfully!");
    } catch (error) {
      console.error(error);
      alert("Error registering user");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, margin: "auto", mt: 5 }}>
      <Typography variant="h4">{user ? "Welcome" : "Login / Register"}</Typography>
      {user ? (
        <>
          <Typography variant="h6">Logged in as: {user.email}</Typography>
          <Typography variant="h6">Role: {role}</Typography>
          <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
        </>
      ) : (
        <>
          <TextField label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value as "Admin" | "User")}>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="User">User</MenuItem>
          </Select>
          <Button variant="contained" color="primary" onClick={() => login(email, password)}>Login</Button>
          <Button variant="contained" color="success" onClick={handleRegister}>Register</Button>
        </>
      )}
    </Box>
  );
};