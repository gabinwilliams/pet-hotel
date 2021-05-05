import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
});

function createData(name, numberOfPets) {
    return { name, numberOfPets};
}

const rows = [
    createData('Chris', 2),
    createData('Ally',  1),
    createData('Dane',  3),
];
export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Number of Pets</TableCell>
                    <TableCell align="center">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, i) => (
                <TableRow key={i}>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.numberOfPets}</TableCell>
                    <TableCell align="center"><Button variant="contained" color="secondary">Delete</Button></TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}