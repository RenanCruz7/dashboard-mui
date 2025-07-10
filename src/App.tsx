import "./App.css";
import { Box } from "@mui/material";
import Topbar from "./components/TopBar/TopBar";
import Sidebar from "./components/SideBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";
import { Routes, Route } from 'react-router-dom';
import TeamDashboard from "./components/TeamDashboard/TeamDashboard";
import Tracks from "./components/Tracks/Tracks";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/pilots" element={<Dashboard />} />
          <Route path="/dashboard/teams" element={<TeamDashboard />} />
          <Route path="/tracks" element={<Tracks />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;