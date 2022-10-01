import React from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button';

function Week() {
  return (
    <div>
      {" "}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Button href='/dailyhours' fullWidth variant="outlined"sx={{ mt: 3, mb: 2 }}>
          Week 1
        </Button>
        <Button href='/dailyhours' fullWidth variant="outlined"sx={{ mt: 3, mb: 2 }}>
         Week 2
        </Button>
        <Button href='/dailyhours' fullWidth variant="outlined"sx={{ mt: 3, mb: 2 }}>
          Week 3
        </Button>
      </Box>
    </div>
  );
}

export default Week