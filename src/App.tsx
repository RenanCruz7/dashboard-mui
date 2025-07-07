import "./App.css";
import { Avatar, Badge, Toolbar, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import maxImage from "./assets/max.png";
import SettingsIcon from '@mui/icons-material/Settings';

function App() {
  return (
    <>
      <Toolbar
        sx={{
          bgcolor: "#8A2BE2", // Cor roxa (BlueViolet)
          color: "white",
          borderRadius: 1,
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          F1 Dashboard 2025
        </Typography>
        <Avatar sx={{ width: 40, height: 40, marginRight: 2 }} src={maxImage}></Avatar>
        <Badge badgeContent={4} color="primary">
          <MailIcon color="inherit" />
        </Badge>
        <SettingsIcon sx={{ color: "white", marginLeft: 2 }} />
      </Toolbar>
    </>
  );
}

export default App;
