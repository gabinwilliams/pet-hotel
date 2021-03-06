import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
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
// import clsx from 'clsx';

const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
    row: {
        fontWeight: 'bold'
    }
});


export default function BasicTable() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const owners = useSelector( store => store.owners )

    console.log('owners', owners )

    const deleteOwner = ( ownerId ) => {

        let ownerToDelete = {
            ownerID: ownerId
        }

        dispatch({type:'DELETE_OWNER', payload: ownerToDelete });
    }

    return (
        <div>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.row}>
                <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Number of Pets</TableCell>
                    <TableCell align="center">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {owners.map((owner, i) => (
                <TableRow key={i}>
                    <TableCell align="center">{owner.owner}</TableCell>
                    <TableCell align="center">{owner.count}</TableCell>
                    <TableCell align="center">
                    <IconButton onClick={ (event) => deleteOwner(owner.id)}variant="contained" size="small" color="secondary">
                        <DeleteIcon></DeleteIcon>
                    </IconButton>
                    
                    </TableCell>
                </TableRow>
                ))}
                <TableRow><TableCell></TableCell></TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}