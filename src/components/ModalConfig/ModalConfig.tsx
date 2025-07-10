import { 
  Modal, Box, Typography, Button, Switch, FormControl, 
  FormControlLabel, FormGroup, Select, MenuItem, InputLabel,
  Divider, Slider, Radio, RadioGroup, FormLabel
} from '@mui/material';
import { useState } from 'react';

interface ModalConfigProps {
  open: boolean;
  onClose: () => void;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxHeight: '80vh',
  overflow: 'auto',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function ModalConfig({ open, onClose }: ModalConfigProps) {
  // Estados para as configurações
  const [darkMode, setDarkMode] = useState(false);
  const [cardsPerRow, setCardsPerRow] = useState(3);
  const [defaultView, setDefaultView] = useState('tracks');
  const [measureUnit, setMeasureUnit] = useState('metric');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [trackSorting, setTrackSorting] = useState('calendar');

  // Função para salvar as configurações
  const saveSettings = () => {
    // Aqui você poderia salvar no localStorage ou em alguma API
    console.log({
      darkMode,
      cardsPerRow,
      defaultView,
      measureUnit,
      itemsPerPage,
      trackSorting
    });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
          Configurações do Dashboard
        </Typography>
        
        <Divider sx={{ mb: 3 }} />
        
        {/* Configurações de Aparência */}
        <Typography variant="h6" gutterBottom>
          Aparência
        </Typography>
        
        <FormGroup sx={{ mb: 2 }}>
          <FormControlLabel 
            control={<Switch checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />} 
            label="Modo escuro" 
          />
        </FormGroup>
        
        <FormControl fullWidth margin="normal">
          <FormLabel component="legend">Cards por linha</FormLabel>
          <RadioGroup 
            row 
            value={cardsPerRow} 
            onChange={(e) => setCardsPerRow(Number(e.target.value))}
          >
            <FormControlLabel value={2} control={<Radio />} label="2" />
            <FormControlLabel value={3} control={<Radio />} label="3" />
            <FormControlLabel value={4} control={<Radio />} label="4" />
          </RadioGroup>
        </FormControl>
        
        <Divider sx={{ my: 3 }} />
        
        {/* Configurações de Dados */}
        <Typography variant="h6" gutterBottom>
          Dados
        </Typography>
        
        <FormControl fullWidth margin="normal">
          <InputLabel>Unidade de medida</InputLabel>
          <Select
            value={measureUnit}
            label="Unidade de medida"
            onChange={(e) => setMeasureUnit(e.target.value)}
          >
            <MenuItem value="metric">Métrico (km)</MenuItem>
            <MenuItem value="imperial">Imperial (milhas)</MenuItem>
          </Select>
        </FormControl>
        
        <FormControl fullWidth margin="normal">
          <InputLabel>Itens por página</InputLabel>
          <Select
            value={itemsPerPage}
            label="Itens por página"
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
        
        <FormControl fullWidth margin="normal">
          <InputLabel>Ordenar pistas por</InputLabel>
          <Select
            value={trackSorting}
            label="Ordenar pistas por"
            onChange={(e) => setTrackSorting(e.target.value)}
          >
            <MenuItem value="calendar">Calendário</MenuItem>
            <MenuItem value="alphabetical">Ordem alfabética</MenuItem>
            <MenuItem value="country">País</MenuItem>
            <MenuItem value="length">Comprimento</MenuItem>
          </Select>
        </FormControl>
        
        <Divider sx={{ my: 3 }} />
        
        {/* Configurações de Exibição */}
        <Typography variant="h6" gutterBottom>
          Exibição
        </Typography>
        
        <FormControl fullWidth margin="normal">
          <InputLabel>Visualização padrão</InputLabel>
          <Select
            value={defaultView}
            label="Visualização padrão"
            onChange={(e) => setDefaultView(e.target.value)}
          >
            <MenuItem value="drivers">Pilotos</MenuItem>
            <MenuItem value="teams">Equipes</MenuItem>
            <MenuItem value="tracks">Pistas</MenuItem>
          </Select>
        </FormControl>
        
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={onClose} variant="outlined">
            Cancelar
          </Button>
          <Button onClick={saveSettings} variant="contained" color="primary">
            Salvar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}