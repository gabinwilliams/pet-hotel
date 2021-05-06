import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  

  const owners = useSelector((store) => store.owners);


  const handleChange = (event) => {
    props.setOwnerId(event.target.value);
    console.log('This is the owner ID:', props.ownerId);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Owner Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.ownerId}
          onChange={handleChange}

        > {owners.map((owner => (
          
          <MenuItem value={owner.id}>{owner.owner}</MenuItem>
          )))}
          
        </Select>
      </FormControl>
     
    </div>
  );
}