import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
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

  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [breed, setBreed] = useState('');
  const [owner, setOwner] = useState('');

  const pets = useSelector((store) => store.pets);

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleColor = (event) => {
    setColor(event.target.value)
  }

  const handleBreed = (event) => {
    setBreed(event.target.value)
  }

// Function to send off the pet to the pets table with owner attached
  const handleSendPet = () => {
      console.log('clicked Submit');

    let petObj = {
      name: name,
      color: color,
      breed: breed,
      
    }
  }



  return (

    <div className="DashboardInputs">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField 
        id="standard-basic" 
        label="Pet Name"
        value={name} 
        onChange={handleName}
        />


        <TextField 
        id="standard-basic" 
        label="Pet Color" 
        value={color}
        onChange={handleColor}
        />


        <TextField 
        id="standard-basic" 
        label="Pet Breed" 
        value={breed}
        onChange={handleBreed}
        />


      </form>
      <DashboardSelect />
      <DashboardButton handleSendPet={handleSendPet} />
    </div>
  );
}
