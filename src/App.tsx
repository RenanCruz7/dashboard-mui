import "./App.css";
import { Box } from "@mui/material";
import Topbar from "./components/TopBar/TopBar";
import Sidebar from "./components/SideBar/SideBar";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
      </Box>
    </Box>
  );
}

export default App;