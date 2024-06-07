import {Box, FormControl, InputLabel, Select} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { PropsWithChildren } from 'react';

interface CustomSelect {
  title: string;
  value: string | number;
  handleChange: (event: SelectChangeEvent<number | string>) => void;
  mode: string;
}

function CustomSelect({ title, handleChange, value, children, mode }: PropsWithChildren<CustomSelect>) {


  const isDisabled = mode === 'indefinite' && title === 'Timer';
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">{title}</InputLabel>
        <Select
        disabled={isDisabled}
          labelId="simple-select-label"
          id="simple-select-label"
          value={value}
          label={title}
          onChange={handleChange}
        >
          {children}
        </Select>
      </FormControl>
    </Box>
  );
}

export default CustomSelect;