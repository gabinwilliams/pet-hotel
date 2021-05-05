import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import clsx from 'clsx';

import DashboardButton from '../DashboardButton/DashboardButton';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1)
    },
    textfield: {
        width: '80ch',
    },
}));

function ManageOwners() {
    const classes = useStyles();

    const [newOwner, setNewOwner] = useState();

    const handleOwner = (event) => {
        setNewOwner(event.target.value)
    }

    return (
        <div className="InputNewOwner">

            <h2 className="dashboardTitle">Manage Owners</h2><br />
            <FormControl className={classes.margin}>
                <TextField 
                    id="new-owner-name"
                    label="New Owner Name"
                    className={clsx(classes.textfield)}
                    value={newOwner}
                    onChange={handleOwner}
                />
            </FormControl>
            <DashboardButton />
        </div>
    );
}

export default ManageOwners;