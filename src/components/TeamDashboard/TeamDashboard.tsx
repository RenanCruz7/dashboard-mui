import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Position', width: 100, headerAlign: 'center', align: 'center' },
  { 
    field: 'team', 
    headerName: 'Team Name', 
    width: 180, 
    headerAlign: 'center', 
    align: 'center' 
  },
  {
    field: 'points',
    headerName: 'Points',
    type: 'number',
    width: 110,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'wins',
    headerName: 'Wins',
    type: 'number',
    width: 110,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'podiums',
    headerName: 'Podiums',
    type: 'number',
    width: 160,
    headerAlign: 'center',
    align: 'center',
  },
];

const rows = [
  { id: 1, team: 'Red Bull Racing', points: 420, wins: 8, podiums: 18 },
  { id: 2, team: 'Ferrari', points: 342, wins: 3, podiums: 15 },
  { id: 3, team: 'Mercedes', points: 322, wins: 2, podiums: 12 },
  { id: 4, team: 'McLaren', points: 305, wins: 1, podiums: 11 },
  { id: 5, team: 'Aston Martin', points: 125, wins: 0, podiums: 3 },
  { id: 6, team: 'Alpine', points: 65, wins: 0, podiums: 0 },
  { id: 7, team: 'Williams', points: 23, wins: 0, podiums: 0 },
  { id: 8, team: 'Alpha Tauri', points: 12, wins: 0, podiums: 0 },
  { id: 9, team: 'Alfa Romeo', points: 8, wins: 0, podiums: 0 },
  { id: 10, team: 'Haas', points: 6, wins: 0, podiums: 0 },
];

function TeamDashboard() {
  return (
    <Box sx={{ height: 650, width: '95%' }}>
      <h2>Classificação de Construtores F1 2025</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default TeamDashboard;