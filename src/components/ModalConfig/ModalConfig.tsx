import { Modal, Box, Typography, Button } from '@mui/material';

interface ModalConfigProps {
  open: boolean;
  onClose: () => void;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function ModalConfig({ open, onClose }: ModalConfigProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Configurações
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Aqui vão as opções de configuração.
        </Typography>
        <Button onClick={onClose} sx={{ mt: 2 }} variant="contained">
          Fechar
        </Button>
      </Box>
    </Modal>
  );
}