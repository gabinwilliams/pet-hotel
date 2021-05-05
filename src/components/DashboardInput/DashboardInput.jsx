import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DashboardButton from '../DashboardButton/DashboardButton';
import DashboardSelect from '../DashboardSelect/DashboardSelect';
import './DashboardInput.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '15vw',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div className="DashboardInputs">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Pet Name" />
        <TextField id="standard-basic" label="Pet Color" />
        <TextField id="standard-basic" label="Pet Breed" />
      </form>
      <DashboardSelect />
      <DashboardButton />
    </div>
  );
}
