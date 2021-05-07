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
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 600,
    maxWidth: 900,
  },
});




export default function BasicTable() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const pets = useSelector((store) => store.pets);

  const deletePet = (id) => {
    console.log('pet to delete:', id);
    let petToDelete = {
        id: id
    }

    dispatch({type:'DELETE_PET', payload: petToDelete });
}
  
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Owner</TableCell>
            <TableCell align="center">Pet</TableCell>
            <TableCell align="center">Breed</TableCell>
            <TableCell align="center">Color</TableCell>
            <TableCell align="center">Checked in</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pets.map((pet) => (
            <TableRow key={pet.id}>
              <TableCell component="th" scope="row">
                {pet.owner}
              </TableCell>
              <TableCell align="center">{pet.name}</TableCell>
              <TableCell align="center">{pet.breed}</TableCell>
              <TableCell align="center">{pet.color}</TableCell>
              <TableCell align="center">{String(pet.are_checked_in)}</TableCell>
              <TableCell align="center">
                <IconButton onClick={() => deletePet(pet.id)}variant="contained" size="small" color="secondary">
                  <DeleteIcon></DeleteIcon>
                </IconButton>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}