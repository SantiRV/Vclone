import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Box } from "@mui/material";
import { SideBar } from "./components/SideBar";
import { Users } from "./pages/Users";
import { Settings } from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <NavBar />
        <SideBar/> 
        <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "240px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}


export default App;

