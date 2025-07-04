import './App.css'
import { Toolbar, Typography } from '@mui/material'

function App() {
  return (
    <>
      <Toolbar sx={{ 
        bgcolor: '#8A2BE2', // Cor roxa (BlueViolet)
        color: 'white',
        borderRadius: 1,
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
      }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Teste de Toolbar
        </Typography>
      </Toolbar>
    </>
  )
}

export default App
