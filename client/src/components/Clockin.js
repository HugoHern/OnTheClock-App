import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Clockin() {
  return (
    <Stack direction="row" spacing={2}>
     
      <Button variant="contained" color="success">
        Clock In
      </Button>
      <Button variant="outlined" color="error">
        Clock Out
      </Button>
    </Stack>
  );
}
