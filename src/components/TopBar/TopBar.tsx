import { AppBar, Avatar, Badge, Toolbar, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import maxImage from "../../assets/max.png";

function Topbar() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ bgcolor: "#000080" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          F1 Dashboard 2025
        </Typography>
        <Avatar sx={{ width: 40, height: 40, marginRight: 2 }} src={maxImage}></Avatar>
        <Badge badgeContent={4} color="primary">
          <MailIcon color="inherit" />
        </Badge>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;