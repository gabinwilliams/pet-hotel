import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

import DashboardButton from '../DashboardButton/DashboardButton';

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

    const [newOwner, setNewOwner] = useState();

    return (
        <div className="InputNewOwner">

            <h2 className="dashboardTitle">Manage Owners</h2><br />
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment">New Owner Name</InputLabel>
                <Input
                    id="new-owner-name"
                    value={newOwner}
                    onChange={setNewOwner}
                />
            </FormControl>
            <DashboardButton />
        </div>
    );
}

export default ManageOwners;