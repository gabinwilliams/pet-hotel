import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '15vw',
    },
    },
}));

function ManageOwners() {
    const classes = useStyles();

    return (
        <> 
            <h2 className="dashboardTitle">Manage Owners</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Owner Name" />
            </form>
        </>
    )
}

export default ManageOwners;