import {Box, FormControl, InputLabel, Select} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { PropsWithChildren, useState } from 'react';

function CustomSelect({ children }: PropsWithChildren) {
  const [mode, setMode] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setMode(event.target.value as string);
    // console.log(mode);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">Mode</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          {children}
        </Select>
      </FormControl>
    </Box>
  );
}

export default CustomSelect;