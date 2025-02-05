import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Typography, 
  Button, TextField, Select, MenuItem, TablePagination } from "@mui/material";
import { useState } from "react";

const initialUsers = [
    { id: 1, name: "Juan Pérez", email: "juan@example.com", role: "Admin" },
    { id: 2, name: "María Gómez", email: "maria@example.com", role: "User" },
    { id: 3, name: "Carlos López", email: "carlos@example.com", role: "User" },
    { id: 4, name: "Juan Pérez", email: "juan@example.com", role: "Admin" },
    { id: 5, name: "María López", email: "maria@example.com", role: "User" },
    { id: 6, name: "Carlos Torres", email: "carlos@example.com", role: "User" },
    { id: 7, name: "Ana Fernández", email: "ana@example.com", role: "Admin" },
    { id: 8, name: "Pedro Gómez", email: "pedro@example.com", role: "User" },
    { id: 9, name: "Lucía Ramírez", email: "lucia@example.com", role: "Admin" },
    { id: 10, name: "Capibara Capibara", email: "capi@example.com", role: "Admin" },
  ];

export const Users = () => {
    const [users, setUsers] = useState(initialUsers);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [editingUser, setEditingUser] = useState<number | null>(null);
    const [editedData, setEditedData] = useState<{ id: number, name: string, email: string, role: string } | null>(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage ] = useState(5);
    const [searchUser, setSearchUser] = useState('')


//ADD & DELETE USERS
    const handleDeleteUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id))
    };
    const handlerAddUser = () => {
        if (!name || !email || !role) return;

        const newUser = {
            id: Date.now(),
            name,
            email,
            role
        }

        setUsers([...users, newUser]);
        setName('');
        setEmail('');
        setRole('');
    };

    //EDIT USERS
    const handleUserEdit = (user: {id: number, name: string, email: string, role: string}) => {
        setEditingUser(user.id);
        setEditedData({ ...user });
    };

    const handleSave = () => {
        setUsers(users.map(user => ( user.id === editedData?.id ? editedData : user ) ))
        setEditingUser(null)
    };

    const handleChange = (filed: string, value: string) => {
        setEditedData(prev => (prev ? {...prev, [filed] : value } : null))
    };

    //PAGINATION

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPages = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0)
    };

    //SEARCH USER

    const handleSearchUser = users.filter(user => 
      user.name.toLowerCase().includes(searchUser.toLowerCase()) ||
      user.email.toLowerCase().includes(searchUser.toLowerCase()) ||
      user.role.toLowerCase().includes(searchUser.toLowerCase())
     );

    return (
        <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Users Management
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
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
      
      <Box>
        <TextField 
        label='Search User' 
        variant="outlined" 
        fullWidth 
        sx={{mb: 2}} 
        value={searchUser} 
        onChange={(e) => setSearchUser(e.target.value)} />
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
            {handleSearchUser.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
              <TableRow key={user.id}>
                <TableCell sx={{ textAlign: "center" }}>{user.id}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {editingUser === user.id ? (
                    <TextField value={editedData?.name || ''} onChange={(e) => {handleChange('name', e.target.value)}} />
                  ) : (
                    user.name
                  )}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                {editingUser === user.id ? (
                    <TextField value={editedData?.email || ''} onChange={(e) => {handleChange('email', e.target.value)}} />
                  ) : (
                    user.email
                  )}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {editingUser === user.id ? (
                    <Select value={editedData?.role || ''} onChange={(e) => handleChange('role', e.target.value)}>
                      <MenuItem value='Admin'>Admin</MenuItem>
                      <MenuItem value='User' >User</MenuItem>
                    </Select>
                  ) : (
                    user.role
                  )}
                </TableCell>
                <TableCell sx={{ textAlign: 'center'}}>
                  {editingUser === user.id ? (
                    <Button variant="contained" color="success" onClick={handleSave}>Save</Button>
                  ) : (
                    <Button variant="contained" onClick={() => handleUserEdit(user)}>Edit</Button>
                  )}
                </TableCell>
                <TableCell>
                <Button variant="contained" color="error" onClick={() => handleDeleteUser(user.id)}>
                    Delete
                </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
        rowsPerPageOptions={[3, 5]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPages}
      />
      </TableContainer>
    </div>
    )
};