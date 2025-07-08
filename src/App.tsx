import "./App.css";
import { Box } from "@mui/material";
import Topbar from "./components/TopBar/TopBar";
import Sidebar from "./components/SideBar/SideBar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;