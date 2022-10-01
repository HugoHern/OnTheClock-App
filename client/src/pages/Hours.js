import React from 'react'
import Clockin from '../components/Clockin';
import Header from '../components/Header';
//import Table from '../components/Table'
import Week from '../components/Week'
import Box from '@mui/material/Box'

function Hours() {
  return (
    <>
      <div className="Hours">
        <Header />
        <h1>Welcome Hugo! </h1>
        <h3>Here are your hours!</h3>
        {/*<Table />*/}
        <Week />
      </div>
      <Box sx={{ display: 'flex', justifyContent: "center" }}>
        <Clockin />
      </Box>
    </>
  );
}

export default Hours