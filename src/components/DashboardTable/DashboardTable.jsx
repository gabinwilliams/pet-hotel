import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 600,
    maxWidth: 900,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();
  const pets = useSelector((store) => store.pets);
  
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Owner</TableCell>
            <TableCell align="right">Pet</TableCell>
            <TableCell align="right">Breed</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Checked in</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pets.map((row) => (
            <TableRow key={row.owner_id}>
              <TableCell component="th" scope="row">
                {row.owner}
              </TableCell>
              <TableCell align="right">{row.pet}</TableCell>
              <TableCell align="right">{row.breed}</TableCell>
              <TableCell align="right">{row.color}</TableCell>
              <TableCell align="right">{String(row.are_checked_in)}</TableCell>
              <TableCell align="right"><button>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}