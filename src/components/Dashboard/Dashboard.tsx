import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'Position', width: 100 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
    headerAlign: 'center', // Centraliza o cabeçalho
    align: 'center',       // Centraliza o conteúdo
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
    headerAlign: 'center', // Centraliza o cabeçalho
    align: 'center',    
  },
  {
    field: 'wins',
    headerName: 'Wins',
    type: 'number',
    width: 110,
    editable: true,
    headerAlign: 'center', // Centraliza o cabeçalho
    align: 'center',    
  },
  {
    field: 'Podiums',
    headerName: 'Podiums',
    description: 'The number of podiums achieved',
    type: 'number',
    width: 160,
    headerAlign: 'center', // Centraliza o cabeçalho
    align: 'center',    
  },
  {
    field: 'team',
    headerName: 'Team',
    description: 'The team of the driver',
    width: 110,
    editable: true,
    headerAlign: 'center', // Centraliza o cabeçalho
    align: 'center',    
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, wins: 5, team: 'Stark', Podiums: 1 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, wins: 3, team: 'Lannister', Podiums: 2 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, wins: 4, team: 'Lannister', Podiums: 1 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, wins: 2, team: 'Stark', Podiums: 0 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, wins: 6, team: 'Targaryen', Podiums: 3 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, wins: 1, team: 'Baratheon', Podiums: 0 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, wins: 2, team: 'Clifford', Podiums: 1 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, wins: 3, team: 'Frances', Podiums: 2 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, wins: 4, team: 'Roxie', Podiums: 1 },
  { id: 10, lastName: 'Targaryen', firstName: 'Viserys', age: null, wins: 0, team: 'Targaryen', Podiums: 0 },
];



function Dashboard() {
  return (
    <Box sx={{ height: 650, width: '95%' }}>
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

export default Dashboard;