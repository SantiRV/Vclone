import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Box } from "@mui/material";
import { SideBar } from "./components/SideBar";
import { PrivateRoute } from "./components/PrivateRoute";
import { AdminPage } from "./components/AdminPage";
import { UserPage } from "./components/UserPage";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Box sx={{ display: "flex" }}>
        
        <SideBar/> 
        <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "240px" }}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<PrivateRoute role="Admin"><AdminPage /></PrivateRoute>} />
          <Route path="/user" element={<PrivateRoute role="User"><UserPage /></PrivateRoute>} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}


export default App;

