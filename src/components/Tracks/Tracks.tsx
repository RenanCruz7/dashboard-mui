// Importações do MUI
import { Box, Card, CardContent, CardMedia, Typography, Chip, Stack } from '@mui/material';

// Dados das pistas
const tracks = [
  { 
    id: 1, 
    name: 'GP do Bahrein', 
    circuit: 'Circuito Internacional do Bahrein', 
    country: 'Bahrein', 
    date: '02/03/2025', 
    status: 'Realizado',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/9col/image.png',
    length: '5.412 km',
    laps: 57,
    firstGP: 2004
  },
  { 
    id: 2, 
    name: 'GP da Arábia Saudita', 
    circuit: 'Circuito de Jeddah', 
    country: 'Arábia Saudita', 
    date: '16/03/2025', 
    status: 'Realizado',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png.transform/9col/image.png',
    length: '6.174 km',
    laps: 50,
    firstGP: 2021
  },
  { 
    id: 3, 
    name: 'GP da Austrália', 
    circuit: 'Circuito de Albert Park', 
    country: 'Austrália', 
    date: '30/03/2025', 
    status: 'Realizado',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png.transform/9col/image.png',
    length: '5.278 km',
    laps: 58,
    firstGP: 1996
  },
  { 
    id: 4, 
    name: 'GP do Japão', 
    circuit: 'Circuito de Suzuka', 
    country: 'Japão', 
    date: '13/04/2025', 
    status: 'Realizado',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png.transform/9col/image.png',
    length: '5.807 km',
    laps: 53,
    firstGP: 1987
  },
  { 
    id: 5, 
    name: 'GP da China', 
    circuit: 'Circuito Internacional de Xangai', 
    country: 'China', 
    date: '27/04/2025', 
    status: 'Realizado',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.png.transform/9col/image.png',
    length: '5.451 km',
    laps: 56,
    firstGP: 2004
  },
  { 
    id: 6, 
    name: 'GP de Miami', 
    circuit: 'Autódromo Internacional de Miami', 
    country: 'Estados Unidos', 
    date: '11/05/2025', 
    status: 'Realizado',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png.transform/9col/image.png',
    length: '5.412 km',
    laps: 57,
    firstGP: 2022
  },
  { 
    id: 7, 
    name: 'GP da Emilia-Romagna', 
    circuit: 'Autodromo Enzo e Dino Ferrari', 
    country: 'Itália', 
    date: '25/05/2025', 
    status: 'Realizado',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit.png.transform/9col/image.png',
    length: '4.909 km',
    laps: 63,
    firstGP: 1980
  },
  { 
    id: 8, 
    name: 'GP de Mônaco', 
    circuit: 'Circuito de Monte Carlo', 
    country: 'Mônaco', 
    date: '08/06/2025', 
    status: 'Realizado',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit.png.transform/9col/image.png',
    length: '3.337 km',
    laps: 78,
    firstGP: 1950
  },
  { 
    id: 9, 
    name: 'GP do Canadá', 
    circuit: 'Circuito Gilles Villeneuve', 
    country: 'Canadá', 
    date: '22/06/2025', 
    status: 'Realizado',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png.transform/9col/image.png',
    length: '4.361 km',
    laps: 70,
    firstGP: 1978
  },
  { 
    id: 10, 
    name: 'GP da Espanha', 
    circuit: 'Circuito de Barcelona-Catalunha', 
    country: 'Espanha', 
    date: '06/07/2025', 
    status: 'Próximo',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png.transform/9col/image.png',
    length: '4.675 km',
    laps: 66,
    firstGP: 1991
  },
  { 
    id: 11, 
    name: 'GP da Áustria', 
    circuit: 'Red Bull Ring', 
    country: 'Áustria', 
    date: '20/07/2025', 
    status: 'Futuro',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png.transform/9col/image.png',
    length: '4.318 km',
    laps: 71,
    firstGP: 1970
  },
  { 
    id: 12, 
    name: 'GP da Grã-Bretanha', 
    circuit: 'Circuito de Silverstone', 
    country: 'Reino Unido', 
    date: '03/08/2025', 
    status: 'Futuro',
    imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png.transform/9col/image.png',
    length: '5.891 km',
    laps: 52,
    firstGP: 1950
  }
];

function Tracks() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Realizado': return { bgcolor: '#e57373', color: 'white' };
      case 'Próximo': return { bgcolor: '#81c784', color: 'white' };
      default: return { bgcolor: '#90caf9', color: 'white' };
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', mb: 3 }}>
        Circuitos F1 2025
      </Typography>
      
      {/* Cards com informações resumidas */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
        <Box sx={{ flex: '1 1 300px', maxWidth: { xs: '100%', sm: '45%', md: '23%' } }}>
          <Card sx={{ backgroundColor: '#e3f2fd', height: '100%' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Total de Circuitos
              </Typography>
              <Typography variant="h5" component="div">
                23 Pistas
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: '1 1 300px', maxWidth: { xs: '100%', sm: '45%', md: '23%' } }}>
          <Card sx={{ backgroundColor: '#e8f5e9', height: '100%' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Pista Mais Longa
              </Typography>
              <Typography variant="h5" component="div">
                Jeddah (6.174 km)
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: '1 1 300px', maxWidth: { xs: '100%', sm: '45%', md: '23%' } }}>
          <Card sx={{ backgroundColor: '#fff8e1', height: '100%' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Pista Mais Curta
              </Typography>
              <Typography variant="h5" component="div">
                Mônaco (3.337 km)
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: '1 1 300px', maxWidth: { xs: '100%', sm: '45%', md: '23%' } }}>
          <Card sx={{ backgroundColor: '#fce4ec', height: '100%' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Próxima Corrida
              </Typography>
              <Typography variant="h5" component="div">
                Barcelona (06/07)
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      
      {/* Cards dos circuitos com imagens */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {tracks.map((track) => (
          <Box key={track.id} sx={{ flex: '1 1 300px', maxWidth: { xs: '100%', sm: '45%', md: '30%' } }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={track.imageUrl}
                alt={track.circuit}
                sx={{ objectFit: 'contain', backgroundColor: '#f5f5f5', padding: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h6" component="div">
                    {track.name}
                  </Typography>
                  <Chip 
                    label={track.status} 
                    size="small" 
                    sx={{ ...getStatusColor(track.status) }} 
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {track.circuit}, {track.country}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Box sx={{ width: '50%' }}>
                      <Typography variant="body2" color="text.secondary">
                        Comprimento
                      </Typography>
                      <Typography variant="body1">
                        {track.length}
                      </Typography>
                    </Box>
                    <Box sx={{ width: '50%' }}>
                      <Typography variant="body2" color="text.secondary">
                        Voltas
                      </Typography>
                      <Typography variant="body1">
                        {track.laps} voltas
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Box sx={{ width: '50%' }}>
                      <Typography variant="body2" color="text.secondary">
                        Primeiro GP
                      </Typography>
                      <Typography variant="body1">
                        {track.firstGP}
                      </Typography>
                    </Box>
                    <Box sx={{ width: '50%' }}>
                      <Typography variant="body2" color="text.secondary">
                        Data 2025
                      </Typography>
                      <Typography variant="body1">
                        {track.date}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Tracks;