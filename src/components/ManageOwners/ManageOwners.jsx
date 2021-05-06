import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import clsx from 'clsx';
import Button from '@material-ui/core/Button'
import '../DashboardInput/DashboardInput.css'
import {useDispatch} from 'react-redux'
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
    const dispatch = useDispatch();

    const [newOwner, setNewOwner] = useState('');

    const handleOwner = (event) => {
        setNewOwner(event.target.value)
    }

    const addNewOwner = () => {
        console.log('in add new')

        let ownerToPost = {
            owner: newOwner,
        }

        dispatch({type:'ADD_OWNER', payload: ownerToPost});
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
                    <Button variant="contained" color="primary" onClick={ (event) => addNewOwner() }>Submit</Button>
                    {/* <DashboardButton /> */}
                </div>
            </div>
            <OwnerTable />
        </div>
    );
}

export default ManageOwners;