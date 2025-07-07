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
        {/* Conteúdo principal vai aqui */}
        <h1>Conteúdo do Dashboard F1</h1>
        <p>Este é o conteúdo principal do seu dashboard. Você pode adicionar gráficos, tabelas e outros componentes aqui.</p>
      </Box>
    </Box>
  );
}

export default App;