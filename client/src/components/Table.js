import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//this will eventually call the database
function createData(day,  timeStart,  timeEnd ) {
  return { day, timeStart, timeEnd };
}

// this will eventually use useEffect
const rows = [
  createData('Monday', '7\:00am', '7\:00pm'),
  createData('Tuesday', '7\:00am', '7\:00pm'),
  createData('Wednesday', '7\:00am', '7\:00pm'),
  createData('Thursday', '7\:00am', '7\:00pm'),
  createData('Friday', '7\:00am', '7\:00pm'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Days</TableCell>
            <TableCell align="center">Time Start</TableCell>
            <TableCell align="center">Time End</TableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.day}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell align="center">{row.timeStart}</TableCell>
              <TableCell align="center">{row.timeEnd}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
