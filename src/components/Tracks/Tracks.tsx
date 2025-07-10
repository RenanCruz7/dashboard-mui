// Importações do MUI
import { Box, Card, CardContent, CardMedia, Typography, Stack } from '@mui/material';

const tracks = [
  { id: 1,  name: 'GP da Austrália',          circuit: 'Circuito de Albert Park',                  country: 'Austrália',              imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png.transform/9col/image.png',        length: '5.278 km', laps: 58, firstGP: 1996 },
  { id: 2,  name: 'GP da China',              circuit: 'Circuito Internacional de Xangai',         country: 'China',                  imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.png.transform/9col/image.png',            length: '5.451 km', laps: 56, firstGP: 2004 },
  { id: 3,  name: 'GP do Japão',             circuit: 'Circuito de Suzuka',                        country: 'Japão',                  imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png.transform/9col/image.png',            length: '5.807 km', laps: 53, firstGP: 1987 },
  { id: 4,  name: 'GP do Bahrein',           circuit: 'Circuito Internacional do Bahrein',         country: 'Bahrein',                imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/9col/image.png',          length: '5.412 km', laps: 57, firstGP: 2004 },
  { id: 5,  name: 'GP da Arábia Saudita',    circuit: 'Circuito de Jeddah',                        country: 'Arábia Saudita',        imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png.transform/9col/image.png',      length: '6.174 km', laps: 50, firstGP: 2021 },
  { id: 6,  name: 'GP de Miami',             circuit: 'Autódromo Internacional de Miami',          country: 'Estados Unidos',         imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png.transform/9col/image.png',            length: '5.412 km', laps: 57, firstGP: 2022 },
  { id: 7,  name: 'GP da Emilia‑Romagna',    circuit: 'Autodromo Enzo e Dino Ferrari',             country: 'Itália',                 imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit.png.transform/9col/image.png', length: '4.909 km', laps: 63, firstGP: 1980 },
  { id: 8,  name: 'GP de Mônaco',            circuit: 'Circuito de Monte Carlo',                   country: 'Mônaco',                 imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit.png.transform/9col/image.png',         length: '3.337 km', laps: 78, firstGP: 1950 },
  { id: 9,  name: 'GP da Espanha',           circuit: 'Circuito de Barcelona-Catalunha',         country: 'Espanha',                imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png.transform/9col/image.png',          length: '4.675 km', laps: 66, firstGP: 1991 },
  { id: 10, name: 'GP do Canadá',            circuit: 'Circuito Gilles Villeneuve',               country: 'Canadá',                 imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png.transform/9col/image.png',        length: '4.361 km', laps: 70, firstGP: 1978 },
  { id: 11, name: 'GP da Áustria',           circuit: 'Red Bull Ring',                             country: 'Áustria',                imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png.transform/9col/image.png',          length: '4.318 km', laps: 71, firstGP: 1970 },
  { id: 12, name: 'GP da Grã‑Bretanha',      circuit: 'Circuito de Silverstone',                  country: 'Reino Unido',            imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png.transform/9col/image.png',    length: '5.891 km', laps: 52, firstGP: 1950 },
  { id: 13, name: 'GP da Bélgica',           circuit: 'Circuito de Spa‑Francorchamps',             country: 'Bélgica',                imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png.transform/9col/image.png',       length: '7.004 km', laps: 44, firstGP: 1950 },
  { id: 14, name: 'GP da Hungria',           circuit: 'Hungaroring',                              country: 'Hungria',                imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png.transform/9col/image.png',        length: '4.381 km', laps: 70, firstGP: 1986 },
  { id: 15, name: 'GP dos Países Baixos',    circuit: 'Circuito de Zandvoort',                    country: 'Países Baixos',          imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png.transform/9col/image.png',    length: '4.259 km', laps: 72, firstGP: 2021 },
  { id: 16, name: 'GP da Itália',            circuit: 'Autódromo Nazionale di Monza',             country: 'Itália',                 imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png.transform/9col/image.png',         length: '5.793 km', laps: 53, firstGP: 1950 },
  { id: 17, name: 'GP do Azerbaijão',        circuit: 'Baku City Circuit',                        country: 'Azerbaijão',             imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Baku_Circuit.png.transform/9col/image.png',    length: '6.003 km', laps: 51, firstGP: 2016 },
  { id: 18, name: 'GP de Singapura',         circuit: 'Circuito de Marina Bay',                  country: 'Singapura',              imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.png.transform/9col/image.png',     length: '5.063 km', laps: 61, firstGP: 2008 },
  { id: 19, name: 'GP dos EUA (Austin)',     circuit: 'Circuit of the Americas',                 country: 'Estados Unidos',         imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.png.transform/9col/image.png',           length: '5.513 km', laps: 56, firstGP: 2012 },
  { id: 20, name: 'GP do México',           circuit: 'Autódromo Hermanos Rodríguez',            country: 'México',                 imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png.transform/9col/image.png',       length: '4.304 km', laps: 71, firstGP: 1963 },
  { id: 21, name: 'GP de São Paulo',        circuit: 'Autódromo José Carlos Pace',             country: 'Brasil',                imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png.transform/9col/image.png',       length: '4.309 km', laps: 71, firstGP: 1973 },
  { id: 22, name: 'GP de Las Vegas',        circuit: 'Las Vegas Strip Circuit',                country: 'Estados Unidos',         imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.png.transform/9col/image.png',    length: '6.120 km', laps: 50, firstGP: 2023 },
  { id: 23, name: 'GP do Catar',            circuit: 'Lusail International Circuit',           country: 'Catar',                  imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png.transform/9col/image.png',        length: '5.380 km', laps: 57, firstGP: 2021 },
  { id: 24, name: 'GP de Abu Dhabi',        circuit: 'Yas Marina Circuit',                     country: 'Emirados Árabes Unidos', imageUrl: 'https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png.transform/9col/image.png', length: '5.554 km', laps: 58, firstGP: 2009 }
];

function Tracks() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold', mb: 3 }}>
        Circuitos F1 2025
      </Typography>
      
      {/* Cards com informações resumidas */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 4 }}>
        <Box sx={{ flex: '1 1 300px', maxWidth: { xs: '100%', sm: '45%', md: '30%' } }}>
          <Card sx={{ backgroundColor: '#e3f2fd', height: '100%' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Total de Circuitos
              </Typography>
              <Typography variant="h5" component="div">
                24 Pistas
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: '1 1 300px', maxWidth: { xs: '100%', sm: '45%', md: '30%' } }}>
          <Card sx={{ backgroundColor: '#e8f5e9', height: '100%' }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Pista Mais Longa
              </Typography>
              <Typography variant="h5" component="div">
                Spa (7.004 km)
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: '1 1 300px', maxWidth: { xs: '100%', sm: '45%', md: '30%' } }}>
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
                <Box sx={{ mb: 1 }}>
                  <Typography variant="h6" component="div">
                    {track.name}
                  </Typography>
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