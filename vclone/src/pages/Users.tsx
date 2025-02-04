import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Typography, Button, TextField, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const initialUsers = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com", role: "Admin" },
    { id: 2, name: "María Gómez", email: "maria@example.com", role: "User" },
    { id: 3, name: "Carlos López", email: "carlos@example.com", role: "User" },
  ];

export const Users = () => {
    const [users, setUsers] = useState(initialUsers);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [editingUser, setEditingUser] = useState<number | null>(null);
    const [editedData, setEditedData] = useState<{ id: number, name: string, email: string, role: string } | null>(null);

    const handleDeleteUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id))
    };
    const handlerAddUser = () => {
        if (!name || !email || !role) return;

        const newUser = {
            id: users.length + 1,
            name,
            email,
            role
        }

        setUsers([...users, newUser]);
        setName('');
        setEmail('');
        setRole('');
    };

    const handleUserEdit = (user: {id: number, name: string, email: string, role: string}) => {
        setEditingUser(user.id);
        setEditedData({ ...user });
    }

    return (
        <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Users Management
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField label="Nombre" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
        
        <Select 
        value={role} 
        onChange={(e) => setRole(e.target.value)} 
        displayEmpty
        variant="outlined"
        sx={{ minWidth: 120 }}>

            <MenuItem value="" >Select your role</MenuItem>
            <MenuItem value="Admin" >Admin</MenuItem>
            <MenuItem value="User">User</MenuItem>
        </Select>

        <Button variant="contained" color="primary" onClick={handlerAddUser}>
            Add
        </Button>
      </Box>
      <TableContainer component={Paper}  sx={{maxWidth: "100%", boxShadow: 3, borderRadius: 2, overflowX: "auto" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                <Button variant="contained" color="error" onClick={() => handleDeleteUser(user.id)}>
                    Delete
                </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    )
};