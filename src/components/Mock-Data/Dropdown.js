import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Dropdown = ({id, value, label, value1, value2}) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          id={id}
          value={value}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value={value}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={value1}>{value1}</MenuItem>
          <MenuItem value={value2}>{value2}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );

  }
