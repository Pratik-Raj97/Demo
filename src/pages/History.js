import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, IconButton, TablePagination,} from '@mui/material';


const rows = [
  { id: 2, gateway: 'a8032a6c74c8', packet: '20 01 02 02 01 09 13 19 BC 32 05 10 56 50 34 34 20 00 76   ',    updatedAt: '2024-09-02T08:19:09.452Z', action:'🗑' },
  { id: 2, gateway: 'a8032a6c74c8', packet: '20 01 02 01 10 F2 D7 1D 61 00 0A 50 4D 4E 32 31 32 20 00 75', updatedAt: '2024-08-30T09:02:51.890Z', action:'🗑' },
  { id: 1, gateway: 'a8032a6c74c8', packet: '22 01 01 01 10 4B 4B 3F 0B 20 00 50 4B 56 31 37 39 20 00 0A', updatedAt: '2024-09-05T09:50:17.692Z', action:'🗑' },
  { id: 1, gateway: 'a8032a6c74c8', packet: '22 01 01 01 10 CB 4D 6D 3F 0B 20 00 4B 56 31 37 39 20 00 0A', updatedAt: '2024-09-01T10:47:28.153Z', action:'🗑'},
  { id: 1, gateway: 'a8032a6c74c8', packet: '24 01 01 01 10 4A 6D 3D 0F 20 00 50 4B 56 31 37 39 20 00 0A', updatedAt: '2024-09-05T11:28:34.011Z', action:'🗑'},
];

const HistoryTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = ( newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper style={{ padding: '20px' }}>
      <h2>History</h2>

      <input type="text" placeholder="Search by Packet" />
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: 'lightgrey' }}>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Gateway</TableCell>
              <TableCell>Packet</TableCell>
              <TableCell>UpdatedAt</TableCell>
              <TableCell >Action </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  {/* Display different icons based on the id */}
                 
                  {row.gateway}
                </TableCell>
                <TableCell>{row.packet}</TableCell>
                <TableCell>{new Date(row.updatedAt).toLocaleString()}</TableCell>
                <TableCell align="right">
                  <IconButton color="error">
                    
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Rows per page"
      />
    </Paper>
  );
};

export default HistoryTable;
