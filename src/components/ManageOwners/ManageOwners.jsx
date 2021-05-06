import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import clsx from 'clsx';
import '../DashboardInput/DashboardInput.css'

import OwnerTable from '../OwnerTable/OwnerTable';
import DashboardButton from '../DashboardButton/DashboardButton';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1)
    },
    textfield: {
        width: '95ch',
    },
}));

function ManageOwners() {
    const classes = useStyles();

    const [newOwner, setNewOwner] = useState();

    const handleOwner = (event) => {
        setNewOwner(event.target.value)
    }

    const addNewOwner = () => {

        let ownerToPost = {
            owner: newOwner,
        }

        axios.post('/api/owner', ownerToPost )
            .then( ( response )=>{
                alert('Success! New Owner Added!');
            }).catch( error => {
                console.log( 'error in addNewOwner POST', error);
            })
    }

    return (
        <div>
            <h2 className="dashboardTitle">Manage Owners</h2>
            <div className="DashboardInputs">
                <FormControl >
                    <TextField 
                        id="new-owner-name"
                        label="New Owner Name"
                        className={clsx(classes.textfield)}
                        value={newOwner}
                        onChange={handleOwner}
                    />
                </FormControl>

                <div>
                    <button onClick={ (event) => addNewOwner() }>Submit</button>
                    <DashboardButton />
                </div>
            </div>
            <OwnerTable />
        </div>
    );
}

export default ManageOwners;