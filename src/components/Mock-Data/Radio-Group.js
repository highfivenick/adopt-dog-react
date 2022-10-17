import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export function RadioButtonsGroup({label, label1, label2, label3}) {
  return (
    <FormControl>
      <FormLabel id="">{label}</FormLabel>
      <RadioGroup
        aria-labelledby=""
        defaultValue={label1}
        name=""
        row
      >
        <FormControlLabel value={label1} control={<Radio />} label={label1} />
        <FormControlLabel value={label2} control={<Radio />} label={label2} />
        <FormControlLabel value={label3} control={<Radio />} label={label3} />
      </RadioGroup>
    </FormControl>
  );
}
