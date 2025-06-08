import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGrid', col2: 'Rocks' },
  { id: 3, col1: 'Material UI', col2: 'Components' },
];

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'col1', headerName: 'Column 1', width: 150, sortable: true },
  { field: 'col2', headerName: 'Column 2', width: 150, sortable: true },
];

export default function TableView() {
  return (
    <div style={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5,10]}
        checkboxSelection
      />
    </div>
  );
}
