import React, {useState} from 'react'
import Clockin from '../components/Clockin';
import Header from '../components/Header';

import Box from '@mui/material/Box'
import Greeting from '../components/Greeting';
import DailyHours from '../components/DailyHours';

function Hours() {
/*sample data */

const User = {
  username: 'Hugo',
  password: 'password'
}
  const [currentUser, setCurrentUser] = useState(User)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  

  return (
    <>
      <div className="Hours">
        <Header />
        <Greeting user={currentUser}/>
        <DailyHours />
      </div>
      <Box sx={{ display: 'flex', justifyContent: "center" }}>
        <Clockin />
      </Box>
      
    </>
  );
}

export default Hours