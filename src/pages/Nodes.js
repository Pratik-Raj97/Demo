import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';


// Sample data for the table

const nodes = [
  { id: 7, gateway: '271c3607983b', mac: '07c4616e6d62', data: 10, battery: 85.71, temp: 24, updatedAt: '8/9/2024, 9:11:04 pm' },
  { id: 1, gateway: '271c3607983b', mac: '271c3607983b', data: 10, battery: 85.71, temp: 24, updatedAt: '2/8/2024, 7:50:18 pm' },
  { id: 9, gateway: 'e8032a6c74c8', mac: '21003d0005504b5631373920', data: 100, battery: 100, temp: 28, updatedAt: '9/9/2024, 11:19:23 pm' },
  { id: 6, gateway: '271c3607983b', mac: 'a117037f1ea', data: 10, battery: 85.71, temp: 24, updatedAt: '8/9/2024, 10:04:56 pm' },
  { id: 10, gateway: '271c3607983b', mac: '3a5f20ac3dfe3a5f20c3d26', data: 1.5, battery: 1.5, temp: 15, updatedAt: '2/8/2024, 10:20:39 pm' },
];

const NodesTable = () => {
  return (
   <div><input type="text" placeholder="Search by MAC id" />
      <button>Apply Filters</button>
      
      

    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>NodeId 🌐</TableCell>
            <TableCell>Gateway🌐</TableCell>
            <TableCell>MAC📶</TableCell>
            <TableCell>Data📊</TableCell>
            <TableCell>Battery🔋</TableCell>
            <TableCell>Temperature🌡</TableCell>
            <TableCell>UpdatedAt⏰</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nodes.map((node) => (
            <TableRow key={node.id}>
              <TableCell>{node.id}</TableCell>
              <TableCell>{node.gateway}</TableCell>
              <TableCell>{node.mac}</TableCell>
              <TableCell>{node.data}</TableCell>
              <TableCell>{node.battery}</TableCell>
              <TableCell>{node.temp}</TableCell>
              <TableCell>{node.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

const Nodes = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">Nodes</Typography>
      <NodesTable />
      </div>
  );
};

export default Nodes;

