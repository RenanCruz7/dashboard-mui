import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Divider,
  Box,
  Collapse
} from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    setOpen(!open);
  };

  const handlePilotDashboardClick = () => {
    navigate('/dashboard/pilots');
    // Ou você pode usar um estado global ou props para mudar o dashboard mostrado
  };

  const handleTeamDashboardClick = () => {
    navigate('/dashboard/teams');
    // Ou você pode usar um estado global ou props para mudar o dashboard mostrado
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: drawerWidth, 
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5',
          borderRight: '1px solid #e0e0e0'
        },
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 8 }}> {/* Espaço para a barra superior */}
        <List>
          {/* Item de Dashboard expansível */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleDashboardClick}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboards" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          {/* Subitens de Dashboard */}
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={handlePilotDashboardClick}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Pilotos" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} onClick={handleTeamDashboardClick}>
                <ListItemIcon>
                  <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary="Equipes" />
              </ListItemButton>
            </List>
          </Collapse>

          {/* Outros itens do menu */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Pilotos" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Estatísticas" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Configurações" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;